import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { Meal } from '../types/mealTypes';

interface InputTypes {
	span?: string;
	ph: keyof Meal;
	Icon: IconType;
	iClass: string;
	reg: UseFormRegister<Meal>;
}

const Input = ({ span, ph, Icon, iClass, reg }: InputTypes) => {
	return (
		<div className={`relative ${span === '2' && 'col-span-2'}`}>
			<input
				type="text"
				placeholder={ph as string}
				autoComplete="off"
				{...reg(ph)}
				className="w-full rounded-full border-[1px] border-transparent bg-neutral-100 py-2 pl-4 pr-10 shadow-shadow-app outline-none duration-300 placeholder:capitalize hover:bg-neutral-50 focus:border-primary"
			/>
			<Icon className={iClass} />
		</div>
	);
};

const SelectCategory = ({ reg }: { reg: UseFormRegister<Meal> }) => {
	return (
		<select
			className="col-span-2 w-full rounded-full border-[1px] border-secondary bg-secondary py-2 pl-4 pr-10 shadow-shadow-app outline-none"
			{...reg('category')}>
			<option value="fried-chicken">Fried Chicken</option>
			<option value="french-fries">French Fries</option>
			<option value="burger">Burger</option>
			<option value="sausage">Sausage</option>
			<option value="hotdog">Hotdog</option>
			<option value="pizza">Pizza</option>
			<option value="taco">Taco</option>
			<option value="drinks">Drinks</option>
		</select>
	);
};

export { Input, SelectCategory };
