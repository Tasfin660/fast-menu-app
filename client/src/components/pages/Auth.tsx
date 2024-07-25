import { Link, useParams } from 'react-router-dom';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Auth = () => {
	const { authId } = useParams();
	const { authStatus, resetAuthStatus } = useAuth();

	useEffect(() => {
		resetAuthStatus();
	}, [authId]);

	return (
		<main className="my-10 grid grid-cols-3 gap-16 px-3">
			<div className="text-sm font-medium">
				<p>
					Status:{' '}
					<span
						className={`font-normal ${authStatus?.name === 'Action Successful!' ? 'text-green-500' : 'text-primary'} `}>
						{authStatus?.name}
					</span>
				</p>
				<p>
					Message:{' '}
					<span
						className={`font-normal ${authStatus?.name === 'Action Successful!' ? 'text-green-500' : 'text-primary'} `}>
						{authStatus?.message}
					</span>
				</p>
			</div>
			{authId === 'login' ? <LoginForm /> : <RegisterForm />}
			{authId === 'login' ? (
				<div className="flex flex-col items-center justify-self-end text-sm">
					<p>Don't have a account?</p>
					<Link to="/auth/register" className="font-medium text-primary">
						Register
					</Link>
				</div>
			) : (
				<div className="flex flex-col items-center justify-self-end text-sm">
					<p>Already have a account?</p>
					<Link to="/auth/login" className="font-medium text-primary">
						Login
					</Link>
				</div>
			)}
		</main>
	);
};

export default Auth;
