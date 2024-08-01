import { AiFillLike } from 'react-icons/ai';
import { FaClipboardList, FaFire, FaStar } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { TbTrashXFilled } from 'react-icons/tb';
import { useMenu } from '../contexts/MenuContext';
import { useUser } from '../contexts/UserContext';
import type { Meal } from '../types/menuTypes';
import LoadingImage from './common/LoadingImage';

const Meal = ({ meal }: { meal: Meal }) => {
	const { user, authState, addMeal } = useUser();
	const { selectMeal, likeMeal } = useMenu();
	const { _id, name, image, price, tag, people, rate, likes } = meal;

	const isLiked = () => {
		return likes.includes(user._id);
	};

	const isAdded = () => {
		return user.meals.includes(_id);
	};

	return (
		<div className="grid h-max grid-cols-2 items-center gap-4 overflow-hidden rounded-lg bg-white shadow-shadow-app">
			<div className="relative flex items-center justify-center">
				<LoadingImage
					lImgSrc="/meal.png"
					lImgStyle="menu-animation w-16"
					src={image}
					alt={name}
					style=""
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h2 className="font-font-secondary text-xl font-medium text-neutral-600">
					{name}
				</h2>
				<div className="flex gap-1.5">
					<p className="flex w-max items-center gap-1.5 rounded-full bg-primary px-2 pt-[1px] text-[11px] font-medium text-white">
						<IoIosPricetag /> ${price}
					</p>
					<p className="flex w-max items-center gap-1.5 rounded-full bg-emerald-400 px-2 pt-[1px] text-[11px] font-medium text-text-light">
						{tag}
					</p>
				</div>
				<p className="flex items-center gap-1.5 text-sm">
					<MdPeopleAlt className="text-primary" /> {people} people
				</p>
				<p className="flex items-center gap-1.5 text-sm">
					<FaFire className="text-primary" /> {people} calories
				</p>
				<div className="-mt-[2px] flex items-center gap-1.5 text-sm font-medium">
					<FaStar className="text-secondary" />
					<span className="text-secondary">{rate}</span>
					<span className="text-xs text-neutral-400">
						({likes?.length} likes)
					</span>
				</div>
				{authState() && (
					<div className="mt-1 flex w-max gap-3 rounded-full px-4 py-1.5 shadow-shadow-menu">
						<button
							className={`box-content rounded-full bg-primary p-1.5 text-sm text-text-light duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary`}
							disabled={isLiked()}
							onClick={() => likeMeal(_id || '')}>
							<AiFillLike />
						</button>
						<button
							className="box-content rounded-full bg-primary p-1.5 text-sm text-text-light duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary"
							disabled={isAdded()}
							onClick={() => addMeal(_id || '')}>
							<FaClipboardList />
						</button>
						<button
							className="box-content rounded-full bg-primary p-1.5 text-sm text-text-light duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary"
							disabled={user.role !== 'admin'}
							onClick={() => selectMeal(_id || '', name)}>
							<TbTrashXFilled />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Meal;
