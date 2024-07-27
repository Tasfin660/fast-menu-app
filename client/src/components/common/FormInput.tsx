import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { Menu } from '../../types/menuTypes';

interface FormInputTypes {
	span?: string;
	ph: keyof Menu;
	Icon: IconType;
	iClass: string;
	reg: UseFormRegister<Menu>;
}

const FormInput = ({ span, ph, Icon, iClass, reg }: FormInputTypes) => {
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

export default FormInput;
