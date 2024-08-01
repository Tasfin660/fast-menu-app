import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import AppError from '../common/AppError';
import Spinner from '../common/Spinner';
import Meal from '../Meal';

const Menu = () => {
	const { category } = useParams();
	const { meals, loading, error, getMeals } = useMenu();

	useEffect(() => {
		getMeals(category || '');
	}, [category]);

	if (loading) return <Spinner type="app" />;

	if (error)
		return (
			<AppError
				src="/server-error.png"
				title="Internal server error."
				message="We’re sorry, but it looks like something went wrong on our end. Please try again later. For further assistance, please contact support."
			/>
		);

	if (meals.length === 0)
		return (
			<AppError
				src="/add-menu.png"
				title="There are no items available."
				message="We apologize, but it seems no items have been added yet. Please log in to add an item."
			/>
		);

	return (
		<main
			className="app-scrollbar shadow-shadowapp grid h-full grid-cols-[repeat(3,350px)] items-start justify-between gap-y-9 overflow-y-scroll rounded-lg py-1 pl-3 pr-6"
			style={{
				gridTemplateRows: `repeat(${Math.ceil(meals.length / 3)}, max-content)`
			}}>
			{meals.map((meal, i) => (
				<Meal key={meal._id} index={i} meal={meal} />
			))}
		</main>
	);
};

export default Menu;
