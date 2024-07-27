import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import AppError from '../common/AppError';
import { MenuSpinner } from '../common/AppSpinners';
import Menu from '../Menu';

const Menus = () => {
	const { menuId } = useParams();
	const { menus, menuLoading, menuError, getMenus } = useMenu();

	useEffect(() => {
		getMenus(menuId || '');
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

	if (menus.length === 0)
		return (
			<AppError
				src="/add-menu.png"
				title="There are no items available."
				message="We apologize, but it seems no items have been added yet. Please log in to add an item."
			/>
		);

	return (
		<main className="app-scrollbar shadow-shadowapp grid h-full grid-cols-[repeat(3,350px)] grid-rows-[max-content] items-start justify-between gap-y-9 overflow-y-scroll rounded-lg py-1 pl-3 pr-6">
			{menus.map(menu => (
				<Menu key={menu._id} menu={menu} />
			))}
		</main>
	);
};

export default Menus;
