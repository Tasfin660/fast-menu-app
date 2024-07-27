import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaDollarSign, FaImage, FaPen, FaStar, FaTag } from 'react-icons/fa6';
import { MdPeopleAlt } from 'react-icons/md';
import * as yup from 'yup';
import HeadingPrimary from '../components/common/HeadingPrimary';
import { Meal } from '../types/mealTypes';
import { Input, SelectCategory } from './AddFormInput';
import { AddSpinner } from './common/AppSpinners';
import { PrimaryBtn, SecondaryBtn } from './common/Buttons';
import { useMenu } from '../contexts/MenuContext';
import AppError from './common/AppError';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	image: yup.string().required('Image is required'),
	price: yup
		.number()
		.positive()
		.typeError('Price must be in USD')
		.required('Price is required'),
	tag: yup.string().required('Tag is required'),
	people: yup
		.number()
		.positive()
		.typeError('People must be a number')
		.required('People is required'),
	rate: yup
		.number()
		.min(1, 'Rate must be at least 1')
		.max(5, 'Rate must be at most 5')
		.typeError('Rate must be a number')
		.required('Rate is required'),
	category: yup.string().required('Choose a food category')
});

const AddForm = () => {
	const iClass =
		'absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-300';
	const { menuError, postMeal } = useMenu();
	const {
		register,
		formState: { isSubmitting, errors: inputErrors },
		handleSubmit,
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = async (data: Meal) => {
		await postMeal(data);
		reset();
	};

	if (isSubmitting) return <AddSpinner />;

	if (menuError)
		return (
			<AppError
				src="/server-error.png"
				title="Internal server error."
				message="We’re sorry, but it looks like something went wrong on our end. Please try again later. For further assistance, please contact support."
			/>
		);

	return (
		<form
			className="grid w-80 grid-cols-2 gap-6 justify-self-end"
			onSubmit={handleSubmit(onSubmit)}>
			<HeadingPrimary context="Add New Meal" />
			<Input span="2" ph="name" Icon={FaPen} iClass={iClass} reg={register} />
			<Input
				span="2"
				ph="image"
				Icon={FaImage}
				iClass={iClass}
				reg={register}
			/>
			<Input ph="price" Icon={FaDollarSign} iClass={iClass} reg={register} />
			<Input ph="tag" Icon={FaTag} iClass={iClass} reg={register} />
			<Input ph="people" Icon={MdPeopleAlt} iClass={iClass} reg={register} />
			<Input ph="rate" Icon={FaStar} iClass={iClass} reg={register} />
			<SelectCategory reg={register} />
			<p className="col-span-2 text-center text-xs font-semibold italic text-red-600">
				{inputErrors?.name?.message ||
					inputErrors?.image?.message ||
					inputErrors?.price?.message ||
					inputErrors?.tag?.message ||
					inputErrors?.people?.message ||
					inputErrors?.rate?.message ||
					inputErrors?.category?.message}
			</p>
			<div className="col-span-2 flex justify-center gap-4 font-medium">
				<PrimaryBtn context="Submit" onClick={() => {}} />
				<SecondaryBtn context="Reset" onClick={() => reset()} />
			</div>
		</form>
	);
};

export default AddForm;
