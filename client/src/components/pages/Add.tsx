import { useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AddForm from '../AddForm';

const Add = () => {
	const { authState } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!authState()) navigate('/unauthorized', { replace: true });
	}, [authState, navigate]);

	return (
		<div className="my-6 grid grid-cols-2 gap-16">
			<AddForm />
			<div className="flex flex-col gap-1 pl-3">
				<h1 className="col-span-2 -ml-3 mb-4 font-font-secondary text-2xl font-semibold">
					Menu Adding Tips
				</h1>
				<Tip context="Use a profer name" />
				<Tip context="Verify the image URL before adding" />
				<Tip context="Ensure the price is in USD" />
				<Tip context="Add a tag for easy unique identification" />
				<Tip context="Specify the number of people the meal can serve" />
				<Tip context="Set the rating between 1 and 5" />
				<Tip context="Remember to like your menu" />
				<Tip context="You must fill in every field before submitting" />
			</div>
		</div>
	);
};

const Tip = ({ context }: { context: string }) => {
	return (
		<p className="flex items-center gap-2 font-medium">
			<FaLongArrowAltRight className="text-xl text-secondary" />
			{context}
		</p>
	);
};

export default Add;
