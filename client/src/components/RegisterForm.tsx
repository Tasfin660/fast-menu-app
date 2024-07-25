import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaImage, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../contexts/AuthContext';
import type { RegisterType } from '../types/authType';
import AuthSpinner from './common/AuthSpinner';
import { useEffect } from 'react';

const schema = yup.object().shape({
	username: yup.string().min(3).max(12).required('Username is required'),
	image: yup.string().required('Image is required'),
	password: yup.string().min(6).max(64).required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Confirm password is required')
});

const RegisterForm = () => {
	const { authState, register } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (authState()) navigate('/', { replace: true });
	}, [authState, navigate]);

	const {
		register: registerInput,
		formState: { isSubmitting, errors: inputErrors },
		handleSubmit,
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: RegisterType) => {
		register(data);
		reset();
	};

	if (isSubmitting) return <AuthSpinner />;

	return (
		<form
			className="flex flex-col items-center gap-5"
			onSubmit={handleSubmit(onSubmit)}>
			<h1 className="font-font-secondary text-2xl font-semibold text-secondary">
				Register
			</h1>
			<div className="relative">
				<input
					type="text"
					placeholder="Username"
					autoComplete="off"
					{...registerInput('username')}
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<div className="relative">
				<input
					type="text"
					placeholder="Image url..."
					autoComplete="off"
					{...registerInput('image')}
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaImage className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<div className="relative">
				<input
					type="password"
					placeholder="Password"
					autoComplete="off"
					{...registerInput('password')}
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<div className="relative">
				<input
					type="password"
					placeholder="Confirm Password"
					autoComplete="off"
					{...registerInput('confirmPassword')}
					className="w-80 rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 hover:bg-neutral-50 focus:border-primary"
				/>
				<FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300" />
			</div>
			<p className="flex items-center gap-2 text-xs font-semibold italic text-red-600">
				{inputErrors?.username?.message ||
					inputErrors?.image?.message ||
					inputErrors?.password?.message ||
					inputErrors?.confirmPassword?.message}
			</p>
			<button className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark">
				Join Now
			</button>
		</form>
	);
};

export default RegisterForm;
