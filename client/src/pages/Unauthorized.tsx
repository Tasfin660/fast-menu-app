import AppError from '../components/common/AppError';

const Unauthorized = () => {
	return (
		<AppError
			src="/unauthorized.png"
			title="Authorization requires."
			message="Please log in first. For further assistance, please contact support."
		/>
	);
};

export default Unauthorized;
