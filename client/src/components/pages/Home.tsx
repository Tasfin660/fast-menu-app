import { useAuth } from '../../contexts/AuthContext';
import AppError from '../common/AppError';

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

	return <p>home</p>;
};

export default Home;
