import { AiOutlineLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { IoIosPricetag } from 'react-icons/io';
import { LuClock3 } from 'react-icons/lu';
import { TbTrashXFilled } from 'react-icons/tb';
import { useAuth } from '../contexts/AuthContext';

const Menu = () => {
	const { user, authState } = useAuth();

	return (
		<div className="grid h-max grid-cols-2 gap-2 overflow-hidden rounded-lg bg-white shadow-shadow-app">
			<div className="flex items-center">
				<img src="/burger.png" alt="" className="px-4" />
			</div>
			<div className="flex flex-col justify-center gap-1 pb-4 pt-2">
				<h2 className="font-font-secondary text-xl font-medium text-neutral-600">
					Cheessy Burger
				</h2>
				<div className="flex gap-1.5">
					<p className="flex w-max items-center gap-1.5 rounded-full bg-primary px-2 pb-[1px] pt-[2px] text-xs font-medium text-white">
						<IoIosPricetag /> $18.25
					</p>
					<p className="flex w-max items-center gap-1.5 rounded-full bg-emerald-400 px-2 pb-[1px] pt-[2px] text-xs font-medium text-text-light">
						Special
					</p>
				</div>
				<p className="flex items-center gap-1.5 text-sm">
					<LuClock3 className="text-primary" /> 10 mins
				</p>
				<div className="-mt-[2px] mb-2 flex items-center gap-1.5 text-sm font-medium">
					<FaStar className="text-secondary" />
					<span className="text-secondary">4.5</span>
					<span className="text-xs text-neutral-400">(200 likes)</span>
				</div>
				{authState() && (
					<div className="flex gap-3">
						<button className="box-content rounded-md bg-white px-2.5 py-2 text-primary shadow-shadow-menu">
							<AiOutlineLike />
						</button>
						<button className="box-content rounded-md bg-white px-2.5 py-2 text-primary shadow-shadow-menu">
							<GoChecklist />
						</button>
						<button
							className="box-content rounded-md bg-primary px-2.5 py-2 text-text-light shadow-shadow-menu duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary"
							disabled={user.role !== 'admin'}>
							<TbTrashXFilled />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

{
	/* <AiFillLike /> */
}

export default Menu;
