import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';

const Auth = () => {
	const { formId } = useParams();
	const { authState, authStatus, resetAuthStatus } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (authState()) navigate('/', { replace: true });
	}, [authState, navigate]);

	useEffect(() => {
		resetAuthStatus();
		if (formId !== 'login' && formId !== 'register')
			navigate('/404', { replace: true });
	}, [formId]);

	return (
		<main className="my-10 grid grid-cols-3 gap-16 px-3">
			<div className="text-sm font-medium dark:text-text-light">
				<p>
					Status:&nbsp;
					<span
						className={`font-normal capitalize ${authStatus.status === 'success' ? 'text-green-500' : 'text-primary'} `}>
						{authStatus.status}
					</span>
				</p>
				<p>
					Message:&nbsp;
					<span
						className={`font-normal ${authStatus.status === 'success' ? 'text-green-500' : 'text-primary'} `}>
						{authStatus.message}
					</span>
				</p>
			</div>
			{formId === 'login' && (
				<>
					<LoginForm />
					<div className="flex flex-col items-center justify-self-end text-sm dark:text-text-light">
						<p>Don't have a account?</p>
						<Link to="/users/register" className="font-medium text-primary">
							Register
						</Link>
					</div>
				</>
			)}
			{formId === 'register' && (
				<>
					<RegisterForm />
					<div className="flex flex-col items-center justify-self-end text-sm dark:text-text-light">
						<p>Already have a account?</p>
						<Link to="/users/login" className="font-medium text-primary">
							Login
						</Link>
					</div>
				</>
			)}
		</main>
	);
};

export default Auth;
