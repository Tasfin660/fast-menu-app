import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../contexts/AuthContext';
import type { LoginType } from '../types/authTypes';
import { AuthSpinner } from './common/AppSpinners';
import { PrimaryBtn } from './common/Buttons';
import HeadingPrimary from './common/HeadingPrimary';

const schema = yup.object().shape({
	username: yup.string().min(3).max(12).required('Username is required'),
	password: yup.string().min(6).max(64).required('Password is required')
});

const LoginForm = () => {
	const { authState, login } = useAuth();
	const navigate = useNavigate();
	const {
		register: registerInput,
		formState: { isSubmitting, errors: inputErrors },
		handleSubmit,
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (authState()) navigate('/', { replace: true });
	}, [authState, navigate]);

	const onSubmit = async (data: LoginType) => {
		await login(data);
		reset();
	};

	if (isSubmitting) return <AuthSpinner />;

	return (
		<form
			className="flex flex-col items-center gap-6"
			onSubmit={handleSubmit(onSubmit)}>
			<HeadingPrimary context="Login" />
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
			<PrimaryBtn context="Enter Now" />
		</form>
	);
};

export default LoginForm;
