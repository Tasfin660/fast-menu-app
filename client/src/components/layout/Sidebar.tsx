import { IconType } from 'react-icons';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChickenLeg, GiFrenchFries, GiHotDog, GiTacos } from 'react-icons/gi';
import { MdKebabDining } from 'react-icons/md';
import { RiDrinks2Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import HeadingPrimary from '../common/HeadingPrimary';

const Sidebar = () => {
	return (
		<nav className="row-span-3 w-[300px] rounded-2xl bg-primary-gradient py-8 text-text-light shadow-shadow-primary dark:shadow-none">
			<Link to="/" className="mb-4 flex flex-col items-center gap-2">
				<img src="/logo.png" alt="logo" className="w-16" />
				<HeadingPrimary context="Fast-Menu" />
			</Link>
			<ul className="-mb-1 flex flex-col gap-3">
				<MenuLink link="fried-chicken" Icon={GiChickenLeg} />
				<MenuLink link="french-fries" Icon={GiFrenchFries} />
				<MenuLink link="burger" Icon={FaHamburger} />
				<MenuLink link="kebab" Icon={MdKebabDining} />
				<MenuLink link="hotdog" Icon={GiHotDog} />
				<MenuLink link="pizza" Icon={FaPizzaSlice} />
				<MenuLink link="taco" Icon={GiTacos} />
				<MenuLink link="drinks" Icon={RiDrinks2Fill} />
			</ul>
		</nav>
	);
};

const MenuLink = ({ link, Icon }: { link: string; Icon: IconType }) => {
	return (
		<li>
			<NavLink
				to={`/menu/meals/${link}`}
				className="hover:text-textdark flex items-center gap-3 rounded-full px-6 py-2.5 capitalize duration-300 hover:mx-4 hover:bg-neutral-300/20">
				<Icon className="text-xl" />
				<span>{link.replace('-', ' ')}</span>
			</NavLink>
		</li>
	);
};

export default Sidebar;
