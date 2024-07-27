import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import AppError from '../common/AppError';
import { MenuSpinner } from '../common/AppSpinners';
import Meal from '../Meal';

const Menu = () => {
	const { menuId } = useParams();
	const { menu, menuLoading, menuError, getMenu } = useMenu();

	useEffect(() => {
		getMenu(menuId || '');
	}, [menuId]);

	if (menuLoading) return <MenuSpinner />;

	if (menuError)
		return (
			<AppError
				src="/server-error.png"
				title="Internal server error."
				message="We’re sorry, but it looks like something went wrong on our end. Please try again later. For further assistance, please contact support."
			/>
		);

	if (menu.length === 0)
		return (
			<AppError
				src="/add-menu.png"
				title="There are no items available."
				message="We apologize, but it seems no items have been added yet. Please log in to add an item."
			/>
		);

	return (
		<main className="app-scrollbar shadow-shadowapp grid h-full grid-cols-[repeat(3,350px)] grid-rows-[max-content] items-start justify-between gap-y-9 overflow-y-scroll rounded-lg py-1 pl-3 pr-6">
			{menu.map(meal => (
				<Meal key={meal._id} meal={meal} />
			))}
		</main>
	);
};

export default Menu;
