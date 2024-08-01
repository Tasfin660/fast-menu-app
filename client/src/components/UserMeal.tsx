import { useUser } from '../contexts/UserContext';
import type { UserMeal } from '../types/userTypes';
import LoadingImage from './common/LoadingImage';

const UserMeal = ({ meal }: { meal: UserMeal }) => {
	const { _id, category, image, name } = meal;
	const { removeMeal } = useUser();

	return (
		<li className="meal-item grid grid-cols-[55px,max-content,1fr,max-content] items-center rounded-full shadow-shadow-menu">
			<LoadingImage
				lImgSrc="/meal-short.png"
				lImgStyle="rounded-full border-2 border-transparent bg-white p-2 shadow-shadow-menu duration-300"
				src={image}
				alt="meal"
				style={`rounded-full border-2 border-transparent bg-white p-2 shadow-shadow-menu duration-300 `}
			/>
			<h2 className="ml-4 mr-3 text-lg font-medium">{name}</h2>
			<h3 className="w-max rounded-lg bg-primary-light px-2.5 py-[1px] text-sm font-semibold uppercase text-primary">
				{category}
			</h3>
			<button
				className="my-2 mr-6 rounded-full bg-primary-gradient p-1 text-lg text-white duration-300 hover:mr-8"
				onClick={() => removeMeal(_id || '')}>
				-
			</button>
		</li>
	);
};

export default UserMeal;
