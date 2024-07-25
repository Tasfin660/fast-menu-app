import { useNavigate } from 'react-router-dom';
import AppError from '../common/AppError';
import { useEffect } from 'react';

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/404', { replace: true });
	}, [navigate]);

	return (
		<AppError
			src="/404.png"
			title="Bad request. Page not found."
			message="Please check the url and try again. For further assistance, please contact support."
		/>
	);
};

export default NotFound;
