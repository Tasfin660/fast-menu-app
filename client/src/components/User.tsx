import { FaRegCalendarAlt } from 'react-icons/fa';
import { useUser } from '../contexts/UserContext';
import LoadingImage from './common/LoadingImage';

const User = () => {
	const { user, deleteUser } = useUser();
	const { username, image, role, joined } = user;
	return (
		<div className="flex flex-col justify-center gap-8 border-r-[1px] border-neutral-300/30 px-12">
			<div className="flex gap-4 rounded-xl p-4 shadow-shadow-menu">
				<LoadingImage
					lImgSrc="/user-none-big.png"
					lImgStyle="size-32"
					src={image}
					alt="user"
					style="size-32 object-cover rounded-xl"
				/>
				<div className="mt-4 text-sm">
					<p className="text-lg font-medium">{username}</p>
					<p className="-mt-[2px] mb-2 text-neutral-400">{role}</p>
					<p className="flex items-center gap-1.5">
						<FaRegCalendarAlt className="text-primary" />
						<span className="font-medium text-primary">Joined:</span> {joined}
					</p>
				</div>
			</div>
			<div className="rounded-xl border-2 border-dashed border-primary bg-primary-light px-4 py-3">
				<h2 className="mb-3 text-2xl font-medium text-primary">Danger Zone</h2>
				<p className="mb-3 text-sm text-neutral-600">
					Are you sure you want to delete your account? This can't be undone,
					and all your data will be lost forever.
				</p>
				<button
					className="mb-1.5 rounded-sm bg-primary-gradient px-3 py-1 text-white shadow-shadow-primary duration-300 hover:-translate-y-1 hover:shadow-xl"
					onClick={() => deleteUser()}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default User;
