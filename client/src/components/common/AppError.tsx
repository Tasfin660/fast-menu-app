import { IoMdRefreshCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AppError = ({
	src,
	title,
	message,
	type
}: {
	src: string;
	title: string;
	message: string;
	type?: string;
}) => {
	return (
		<div className="my-10 flex h-full flex-col items-center">
			<img src={src} alt="user none" className="mb-4 w-40 opacity-10" />
			<span className="text-center font-medium opacity-40">{title}</span>
			<span className="w-[500px] text-center font-medium opacity-40">
				{message}
			</span>
			<div className="mt-6 flex items-center gap-4 font-medium">
				{type === 'home' ? (
					<>
						<Link
							to="/auth/login"
							className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark">
							Log In
						</Link>
						<Link
							to="/auth/register"
							className="rounded-full bg-primary-light px-3 py-1 text-primary duration-300 hover:bg-red-200">
							Register
						</Link>
					</>
				) : (
					<>
						<Link
							to="/"
							className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark">
							Home
						</Link>
						<button
							className="box-content text-4xl text-primary duration-300 hover:text-primary-dark"
							onClick={() => location.reload()}>
							<IoMdRefreshCircle />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default AppError;
