import { useUser } from '../contexts/UserContext';
import AppError from '../components/common/AppError';
import User from '../components/User';
import UserMeals from '../components/UserMeals';

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
		<div className="grid h-full grid-cols-2 overflow-hidden rounded-2xl bg-theme-component-bg shadow-shadow-menu dark:bg-cl-gray-neutral">
			<User />
			<UserMeals />
		</div>
	);
};

export default Home;
