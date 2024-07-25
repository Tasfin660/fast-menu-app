import { IoMdHome } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme';

const Header = () => {
	const { menuId, authId } = useParams();

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
				{menuId && (
					<p className="rounded-full px-4 pb-1.5 pt-2 text-sm font-medium text-primary shadow-shadow-app">
						Results: 05
					</p>
				)}
				<ToggleTheme />
			</div>
		</header>
	);
};

export default Header;
