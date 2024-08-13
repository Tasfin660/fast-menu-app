import { useUser } from '../../contexts/UserContext';
import AppError from '../common/AppError';
import User from '../User';
import UserMeals from '../UserMeals';

const Home = () => {
	const { authState } = useUser();

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
		<div className="grid h-full grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-shadow-menu">
			<User />
			<UserMeals />
		</div>
	);
};

export default Home;
