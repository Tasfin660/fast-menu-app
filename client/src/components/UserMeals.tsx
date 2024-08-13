import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import AppError from './common/AppError';
import Spinner from './common/Spinner';
import UserMeal from './UserMeal';

const UserMeals = () => {
	const { userMeals, loading, error, getUserMeals } = useUser();
	const length = userMeals.length;

	useEffect(() => {
		getUserMeals();
	}, []);

	return (
		<div className="overflow-hidden border-l-[1px] border-neutral-300/30 bg-neutral-900 p-6">
			<div className="grid grid-cols-[1fr,max-content,50px] items-center gap-4 pb-4">
				<h1 className="font-font-secondary text-2xl font-semibold">
					Favourite Meals List
				</h1>
				<p className="font-semibold">
					Total:{' '}
					<span className="text-primary">
						{length < 10 ? `0${length}` : `${length}`}
					</span>
				</p>
				<img
					src="/meal-short.png"
					alt="fast food"
					className="rounded-full bg-primary-light p-2"
				/>
			</div>
			<ul className="app-scrollbar smooth-rendering flex h-full flex-col items-center gap-6 overflow-y-scroll pb-10 pl-4 pr-6 pt-2">
				{loading && <Spinner type="app" />}
				{error && (
					<AppError
						src="/server-error.png"
						title="Internal server error."
						message="We’re sorry, but it looks like something went wrong on our end."
					/>
				)}
				{!loading && !error ? (
					length === 0 ? (
						<div className="flex flex-col items-center gap-4">
							<img src="/list.png" alt="item" className="w-16 opacity-10" />
							<p className="font-medium opacity-40">
								No meals have been added to the list yet.
							</p>
						</div>
					) : (
						userMeals.map(meal => <UserMeal key={meal._id} meal={meal} />)
					)
				) : (
					''
				)}
			</ul>
		</div>
	);
};

export default UserMeals;
