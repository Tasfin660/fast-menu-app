import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import {
	GiChickenLeg,
	GiFrenchFries,
	GiHotDog,
	GiSausage,
	GiTacos
} from 'react-icons/gi';
import { RiDrinks2Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import HeadingPrimary from '../common/HeadingPrimary';

const Sidebar = () => {
	return (
		<nav className="row-span-3 w-[300px] rounded-2xl bg-primary-gradient py-8 text-text-light shadow-shadow-primary">
			<Link to="/" className="mb-4 flex flex-col items-center gap-2">
				<img src="/logo.png" alt="logo" className="w-16" />
				<HeadingPrimary context="Fast-Menu" />
			</Link>
			<ul className="-mb-1 flex flex-col gap-3">
				<li>
					<NavLink
						to="/menu/fried-chicken"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiChickenLeg className="text-xl" /> <span>Fried Chicken</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/french-fries"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiFrenchFries className="text-xl" /> <span>French Fries</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/burger"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<FaHamburger className="text-xl" /> <span>Burger</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/sausage"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiSausage className="text-xl" /> <span>Sausage</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/hotdog"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiHotDog className="text-xl" /> <span>Hotdog</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/pizza"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<FaPizzaSlice className="text-xl" /> <span>Pizza</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/taco"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiTacos className="text-xl" /> <span>Taco</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/drinks"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<RiDrinks2Fill className="text-xl" /> <span>Drinks</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
