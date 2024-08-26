import { AiFillLike } from 'react-icons/ai';
import { FaClipboardList, FaFire, FaStar } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { TbTrashXFilled } from 'react-icons/tb';
import { useMenu } from '../contexts/MenuContext';
import { useUser } from '../contexts/UserContext';
import type { Meal } from '../types/menuTypes';
import LoadingImage from './common/LoadingImage';

const Meal = ({ index, meal }: { index: number; meal: Meal }) => {
	const { user, authState, addMeal } = useUser();
	const { selectMeal, likeMeal } = useMenu();
	const { _id, name, image, price, tag, people, calorie, rate, likes } = meal;

	return (
		<div className="relative grid grid-cols-2 gap-x-4 overflow-hidden rounded-lg bg-theme-component-bg shadow-shadow-app duration-300 dark:bg-cl-gray-neutral">
			<div className="z-[2] col-span-2 mx-4 mt-3 flex items-center gap-2 overflow-hidden rounded-full border-2 border-primary bg-theme-app-bg font-font-secondary text-lg font-medium capitalize text-neutral-600 shadow-shadow-app duration-300 dark:bg-cl-gray-light dark:text-text-light">
				<p className="bg-primary px-2.5 py-[1px] text-white">
					{index < 9 ? `0${index + 1}` : `${index}`}
				</p>
				<h2>{name}</h2>
			</div>
			<LoadingImage
				lImgSrc="/meal.png"
				lImgStyle="menu-animation -mt-5 h-[175px] p-14"
				src={image}
				alt={name}
				style="-mt-5 h-[175px] object-cover"
			/>
			<div className="flex flex-col gap-1 py-[14px]">
				<p className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-text-light">
					<MdPeopleAlt className="mr-[2px] text-primary" /> {people} people
				</p>
				<p className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-text-light">
					<FaFire className="mr-[2px] text-primary" /> {calorie} calories
				</p>
				<div className="flex items-center gap-1 text-sm font-medium text-neutral-400">
					<FaStar className="mr-[2px] text-secondary" />
					<span className="text-secondary">{rate}/5</span>
					<span className="text-xs">({likes?.length} likes)</span>
				</div>
				{authState() && (
					<div className="flex flex-grow-[1] items-end">
						<div className="flex w-max gap-5 rounded-full bg-theme-app-bg p-1.5 shadow-shadow-menu duration-300 dark:bg-cl-gray-light">
							<button
								className={`box-content rounded-full bg-primary-light p-1.5 text-sm text-primary duration-300 hover:bg-red-200 disabled:cursor-not-allowed disabled:bg-primary disabled:text-text-light disabled:hover:bg-primary dark:bg-cl-gray-neutral dark:hover:bg-cl-gray-dark`}
								disabled={likes?.includes(user._id || '')}
								onClick={() => likeMeal(_id || '')}>
								<AiFillLike />
							</button>
							<button
								className="box-content rounded-full bg-primary-light p-1.5 text-sm text-primary duration-300 hover:bg-red-200 disabled:cursor-not-allowed disabled:bg-primary disabled:text-text-light disabled:hover:bg-primary dark:bg-cl-gray-neutral dark:hover:bg-cl-gray-dark"
								disabled={user.meals.includes(_id || '')}
								onClick={() => addMeal(_id || '')}>
								<FaClipboardList />
							</button>
							<button
								className="box-content rounded-full bg-primary p-1.5 text-sm text-text-light duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary"
								disabled={user.role !== 'Admin'}
								onClick={() => selectMeal(_id || '', name)}>
								<TbTrashXFilled />
							</button>
						</div>
					</div>
				)}
			</div>
			<div className="absolute bottom-3 left-5 flex gap-1.5">
				<p className="flex w-max items-center gap-1.5 rounded-full bg-primary px-2 pt-[1px] text-[11px] font-medium text-white">
					<IoIosPricetag /> ${price}
				</p>
				<p className="flex w-max items-center gap-1.5 rounded-full bg-emerald-500 px-2 pt-[1px] text-[11px] font-medium text-text-light">
					{tag}
				</p>
			</div>
		</div>
	);
};

export default Meal;
