import { FaStar } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { IoIosPricetag } from 'react-icons/io';
import { LuClock3 } from 'react-icons/lu';

const Menu = () => {
	return (
		<div className="shadow-shadow-menu grid h-max grid-cols-2 overflow-hidden rounded-lg">
			<div className="flex items-center">
				<img src="/burger.png" alt="" className="" />
			</div>
			<div className="flex flex-col justify-center gap-1 p-3">
				<h2 className="font-font-secondary text-xl font-medium">
					Cheessy Burger
				</h2>
				<div className="flex gap-1.5">
					<p className="flex w-max items-center gap-1.5 rounded-full bg-primary px-2 pb-[1px] pt-[2px] text-xs font-medium text-white">
						<IoIosPricetag /> $18.25
					</p>
					<p className="flex w-max items-center gap-1.5 rounded-full bg-emerald-400 px-2 pb-[1px] pt-[2px] text-xs font-semibold text-emerald-700">
						Special
					</p>
				</div>
				<p className="flex items-center gap-1.5 text-sm">
					<LuClock3 className="text-primary" /> 10 mins
				</p>
				<div className="-mt-[2px] mb-2 flex items-center gap-1.5 text-sm font-medium">
					<FaStar className="text-secondary" />{' '}
					<span className="text-secondary">4.5</span>{' '}
					<span className="text-xs text-neutral-400">(200 ratings)</span>
				</div>
				<button className="flex items-center justify-center gap-2 rounded-full bg-primary-light px-3 py-1 text-primary duration-300 hover:bg-red-200">
					<GoChecklist />
					Add
				</button>
			</div>
		</div>
	);
};

export default Menu;
