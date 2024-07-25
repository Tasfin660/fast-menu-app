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

const Sidebar = () => {
	return (
		<nav className="row-span-3 w-[300px] rounded-2xl bg-primary-gradient py-8 text-text-light shadow-shadow-primary">
			<Link to="/" className="mb-4 flex flex-col items-center gap-2">
				<img src="/logo.png" alt="logo" className="w-16" />
				<h1 className="font-font-secondary text-2xl font-semibold text-secondary">
					Fast-Menus
				</h1>
			</Link>
			<ul className="-mb-1 flex flex-col gap-3">
				<li>
					<NavLink
						to="/menu/fried-chickens"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiChickenLeg className="text-xl" /> <span>Fried Chickens</span>
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
						to="/menu/burgers"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<FaHamburger className="text-xl" /> <span>Burgers</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/sausages"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiSausage className="text-xl" /> <span>Sausages</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/hotdogs"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiHotDog className="text-xl" /> <span>Hotdogs</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/pizzas"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<FaPizzaSlice className="text-xl" /> <span>Pizzas</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/menu/tacos"
						className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 duration-300 hover:mx-4 hover:bg-neutral-300/20">
						<GiTacos className="text-xl" /> <span>Tacos</span>
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
// function SomeComp() {
// const match = useMatch("/messages");
// return <li className={Boolean(match) ? "active" : ""} />;
// }
