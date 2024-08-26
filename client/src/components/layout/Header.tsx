import { IoMdHome } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import ToggleTheme from '../ToggleTheme';

const Header = () => {
	const { category, authId } = useParams();
	const { pathname } = useLocation();
	const { meals } = useMenu();
	const length = meals.length;

	return (
		<header className="mb-2 flex items-center justify-between px-3">
			<div className="flex items-center text-sm font-medium text-primary">
				<IoMdHome className="mr-1.5" />
				<Link to="/">Home</Link>
				{category && (
					<>
						<RiArrowRightSLine className="text-lg" />
						<span>Menu</span>
						<RiArrowRightSLine className="text-lg" />
					</>
				)}
				{authId && <RiArrowRightSLine className="text-lg" />}
				{pathname === '/menu/add-meal' && (
					<>
						<RiArrowRightSLine className="text-lg" />
						<span>Menu</span>
						<RiArrowRightSLine className="text-lg" />
					</>
				)}
				<span className="capitalize">{authId}</span>
				<span className="capitalize">{category}</span>
				<span className="capitalize">
					{pathname === '/menu/add-meal' && 'Add Meal'}
				</span>
			</div>
			<div className="flex items-center gap-6">
				<div className="header-message dark:bg-cl-gray-neutral relative w-[400px] overflow-hidden text-nowrap rounded-full bg-theme-component-bg pb-1.5 pt-2 text-sm font-medium shadow-shadow-app duration-300">
					&nbsp;
				</div>
				{category && (
					<p className="dark:bg-cl-gray-neutral rounded-full bg-theme-component-bg px-4 pb-1.5 pt-2 text-sm font-medium text-primary shadow-shadow-app duration-300">
						Results: {length < 10 ? `0${length}` : `${length}`}
					</p>
				)}
				<ToggleTheme />
			</div>
		</header>
	);
};

export default Header;
