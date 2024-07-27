import { IoIosRemoveCircle } from 'react-icons/io';
import { useAuth } from '../../contexts/AuthContext';
import AppError from '../common/AppError';
import HeadingPrimary from '../common/HeadingPrimary';
import MealItem from '../MealItem';

const Home = () => {
	const { authState } = useAuth();
	const data = {
		category: 'burger',
		name: 'California Burger',
		image:
			'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/NowaGrafikaProduktowa/grander_NEW240.png',
		price: 7.34,
		tag: 'Pl-KFC',
		poeple: 1,
		rate: 3,
		likes: 1
	};

	if (!authState())
		return (
			<AppError
				src="/user-none-big.png"
				title="Avocade is not a real user."
				message="Please log in first to see user dashboard."
				type="home"
			/>
		);

	return (
		<div className="grid h-full grid-cols-2 rounded-2xl bg-white shadow-shadow-menu">
			<div className="border-r-[1px] border-neutral-300/30">&nbsp;</div>
			<div className="app-scrollbar overflow-hidden border-l-[1px] border-neutral-300/30 p-6">
				<div className="grid grid-cols-[1fr,max-content,50px] items-center gap-4 pb-4">
					<h1 className="font-font-secondary text-2xl font-semibold">
						Favourite Meals List
					</h1>
					<p className="font-semibold">
						Total: <span className="text-primary">12</span>
					</p>
					<img
						src="/meal-short.png"
						alt="fast food"
						className="rounded-full bg-primary-light p-2"
					/>
				</div>
				<ul className="app-scrollbar flex h-full flex-col gap-6 overflow-y-scroll pb-10 pl-4 pr-6 pt-2">
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
					<MealItem meal={data} />
				</ul>
			</div>
		</div>
	);
};

export default Home;
