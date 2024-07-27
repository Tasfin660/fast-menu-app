import { useAuth } from '../../contexts/AuthContext';
import AppError from '../common/AppError';
import MealList from '../MealList';

const Home = () => {
	const { authState } = useAuth();

	if (!authState())
		return (
			<AppError
				src="/user-none-big.png"
				title="Avocade is not a real user."
				message="Please log in first to see user dashboard."
				type="home"
			/>
		);

	return (
		<div className="grid h-full grid-cols-2 rounded-2xl bg-white shadow-shadow-menu">
			<div className="border-r-[1px] border-neutral-300/30">&nbsp;</div>
			<MealList />
		</div>
	);
};

export default Home;
