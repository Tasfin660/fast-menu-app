import { useUser } from '../contexts/UserContext';
import type { UserMeal } from '../types/userTypes';
import LoadingImage from './common/LoadingImage';

const UserMeal = ({ meal }: { meal: UserMeal }) => {
	const { _id, category, image, name } = meal;
	const { removeMeal } = useUser();

	const imgStyle =
		'rounded-full border-2 h-[55px] object-cover border-transparent bg-white p-1 shadow-shadow-menu duration-300';

	return (
		<li className="meal-item grid w-full grid-cols-[55px,max-content,1fr,max-content] items-center rounded-full bg-theme-component-bg shadow-shadow-menu dark:bg-cl-gray-light">
			<LoadingImage
				lImgSrc="/meal-short.png"
				lImgStyle={imgStyle}
				src={image}
				alt="meal"
				style={imgStyle}
			/>
			<h2 className="ml-4 mr-3 text-lg font-medium dark:text-text-light">
				{name}
			</h2>
			<h3 className="w-max rounded-lg bg-primary-light px-2 py-[1px] text-sm font-semibold uppercase text-primary">
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
