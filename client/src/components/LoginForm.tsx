import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import * as yup from 'yup';
import { useAuth } from '../contexts/AuthContext';
import type { LoginType } from '../types/authType';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthSpinner from './common/AuthSpinner';

const schema = yup.object().shape({
	username: yup.string().min(3).max(12).required('Username is required'),
	password: yup.string().min(6).max(64).required('Password is required')
});

const LoginForm = () => {
	const { authState, login } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (authState) navigate('/', { replace: true });
	}, [authState, navigate]);

	const {
		register: registerInput,
		formState: { isSubmitting, errors: inputErrors },
		handleSubmit,
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: LoginType) => {
		login(data);
		reset();
	};

	if (isSubmitting) return <AuthSpinner />;

	return (
		<form
			className="flex flex-col items-center gap-6"
			onSubmit={handleSubmit(onSubmit)}>
			<h1 className="font-font-secondary text-2xl font-semibold text-secondary">
				Login
			</h1>
			<div className="relative">
				<input
					type="text"
					placeholder="Username"
					autoComplete="off"
					{...registerInput('username')}
					value="user_avocado"
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<div className="relative">
				<input
					type="password"
					placeholder="Password"
					autoComplete="off"
					{...registerInput('password')}
					value="iamavocado"
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<p className="text-xs font-semibold italic text-red-600">
				{inputErrors?.username?.message || inputErrors?.password?.message}
			</p>
			<button className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark">
				Enter Now
			</button>
		</form>
	);
};

export default LoginForm;
