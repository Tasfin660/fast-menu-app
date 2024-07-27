import { IoMdHome } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme';
import { useMenu } from '../../contexts/MenuContext';

const Header = () => {
	const { menuId, authId } = useParams();
	const { menus } = useMenu();
	const length = menus.length;

	return (
		<header className="mb-2 flex items-center justify-between px-3">
			<div className="flex items-center text-sm font-medium text-primary">
				<IoMdHome className="mr-1.5" />
				<Link to="/">Home</Link>
				{menuId && (
					<>
						<RiArrowRightSLine className="text-lg" />
						<span>Menu</span>
						<RiArrowRightSLine className="text-lg" />
					</>
				)}
				{authId && <RiArrowRightSLine className="text-lg" />}
				<span className="capitalize">{authId}</span>
				<span className="capitalize">{menuId}</span>
			</div>
			<div className="flex items-center gap-6">
				<div className="header-message relative w-[400px] overflow-hidden text-nowrap rounded-full pb-1.5 pt-2 text-sm font-medium shadow-shadow-app">
					&nbsp;
				</div>
				{menuId && (
					<p className="rounded-full px-4 pb-1.5 pt-2 text-sm font-medium text-primary shadow-shadow-app">
						Results: {length < 10 ? `0${length}` : `${length}`}
					</p>
				)}
				<ToggleTheme />
			</div>
		</header>
	);
};

export default Header;
