import { useReducer } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { IoIosPricetag } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { TbTrashXFilled } from 'react-icons/tb';
import { useAuth } from '../contexts/AuthContext';
import { useMenu } from '../contexts/MenuContext';
import type { Action, Meal, MealTypes } from '../types/mealTypes';

const initialState = {
	imgLoading: true
};

const reducer = (state: MealTypes, action: Action) => {
	switch (action.type) {
		case 'image/loaded':
			return { ...state, imgLoading: false };
		default:
			throw new Error('Action unknown!');
	}
};

const Meal = ({ meal }: { meal: Meal }) => {
	const { user, authState, addMeal } = useAuth();
	const { selectMeal } = useMenu();
	const { _id, name, image, price, tag, people, rate, likes } = meal;
	const [{ imgLoading }, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="grid h-max grid-cols-2 gap-2 overflow-hidden rounded-lg bg-white shadow-shadow-app">
			<div className="relative flex items-center justify-center">
				{imgLoading && (
					<img
						src="/meal.png"
						alt="fast food"
						className="menu-animation w-16"
					/>
				)}
				<img
					src={image}
					alt={name}
					className="px-8"
					style={imgLoading ? { visibility: 'hidden', display: 'none' } : {}}
					onLoad={() => dispatch({ type: 'image/loaded' })}
				/>
			</div>
			<div className="flex flex-col justify-center gap-1 pb-4 pt-2">
				<h2 className="font-font-secondary text-xl font-medium text-neutral-600">
					{name}
				</h2>
				<div className="flex gap-1.5">
					<p className="flex w-max items-center gap-1.5 rounded-full bg-primary px-2 pt-[1px] text-xs font-medium text-white">
						<IoIosPricetag /> ${price}
					</p>
					<p className="flex w-max items-center gap-1.5 rounded-full bg-emerald-400 px-2 pb-[1px] pt-[2px] text-xs font-medium text-text-light">
						{tag}
					</p>
				</div>
				<p className="flex items-center gap-1.5 text-sm">
					<MdPeopleAlt className="text-primary" /> {people} people
				</p>
				<div className="-mt-[2px] mb-2 flex items-center gap-1.5 text-sm font-medium">
					<FaStar className="text-secondary" />
					<span className="text-secondary">{rate}</span>
					<span className="text-xs text-neutral-400">({likes} likes)</span>
				</div>
				{authState() && (
					<div className="flex gap-3">
						<button className="box-content rounded-full bg-white px-2.5 py-2 text-primary shadow-shadow-menu">
							<AiOutlineLike />
						</button>
						<button
							className="box-content rounded-full bg-white px-2.5 py-2 text-primary shadow-shadow-menu"
							onClick={async () => await addMeal(_id || '')}>
							<GoChecklist />
						</button>
						<button
							className="box-content rounded-full bg-primary px-2.5 py-2 text-text-light shadow-shadow-menu duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary"
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
