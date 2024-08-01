import { useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import AddForm from '../forms/AddForm';

const Add = () => {
	const { authState } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (!authState()) navigate('/unauthorized', { replace: true });
	}, [authState, navigate]);

	return (
		<div className="my-6 grid grid-cols-2 gap-16">
			<AddForm />
			<div className="flex flex-col gap-1 pl-3">
				<h1 className="col-span-2 -ml-3 mb-4 font-font-secondary text-2xl font-semibold">
					Meal Adding Tips
				</h1>
				<Tip context="Use a profer name" />
				<Tip context="Verify the image URL before adding" />
				<Tip context="Ensure the price is in USD" />
				<Tip context="Add a tag for easy unique identification" />
				<Tip context="Specify the number of people the meal can serve" />
				<Tip context="Set the rating between 1 and 5" />
				<Tip context="Your meal will automatically receive 1 like" />
				<Tip context="You must fill in every field before submitting" />
				<Tip context="You need to log in first to add a meal." />
			</div>
		</div>
	);
};

const Tip = ({ context }: { context: string }) => {
	return (
		<p className="flex items-center gap-2">
			<FaLongArrowAltRight className="text-xl text-secondary" />
			{context}
		</p>
	);
};

export default Add;
