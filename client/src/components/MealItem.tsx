import { useState } from 'react';

const MealItem = ({ meal }) => {
	const [imgLoading, setImgLoading] = useState(true);
	const { category, image, name } = meal;

	return (
		<li className="meal-item grid grid-cols-[55px,max-content,1fr,max-content] items-center rounded-full shadow-shadow-menu">
			{imgLoading && (
				<img
					src="/meal-short.png"
					alt="fast food"
					className="rounded-full border-2 border-transparent bg-white p-2 shadow-shadow-menu duration-300"
				/>
			)}
			<img
				src={image}
				alt="meal"
				style={imgLoading ? { visibility: 'hidden', display: 'none' } : {}}
				onLoad={() => setImgLoading(false)}
				className="rounded-full border-2 border-transparent bg-white p-2 shadow-shadow-menu duration-300"
			/>
			<h2 className="ml-4 mr-3 text-lg font-medium">{name}</h2>
			<h3 className="w-max rounded-lg bg-primary-light px-2.5 py-[1px] text-sm font-semibold uppercase text-primary">
				{category}
			</h3>
			<button className="my-2 mr-6 rounded-full bg-primary-gradient p-1 text-lg text-white duration-300 hover:mr-8">
				-
			</button>
		</li>
	);
};

export default MealItem;
