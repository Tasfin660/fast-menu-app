import { FaCrown } from 'react-icons/fa';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
	const { user, logout, authState } = useAuth();
	const { username, image, role } = user;
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<nav className="col-start-2 col-end-3 flex items-center justify-between rounded-full p-2 pr-4 shadow-shadow-app">
			<figure className="flex items-center">
				<img src={image} alt="user" className="w-10 rounded-full" />
				<figcaption className="ml-4 mr-2 font-medium">{username}</figcaption>
				{role === 'admin' && <FaCrown className="text-sm text-secondary" />}
			</figure>
			<div className="flex items-center gap-4">
				{authState() ? (
					<>
						<Link to="/menu/add" className="flex items-center gap-4">
							<MdOutlineBookmarkAdd
								className={`box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${location.pathname === '/menu/add' && '!bg-primary text-text-light'}`}
							/>
						</Link>
						<button onClick={handleLogout}>
							<Link to="/" className="flex items-center gap-4">
								<IoLogOut
									className={`box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${(location.pathname === '/auth/login' || location.pathname === '/auth/register') && '!bg-primary text-text-light'}`}
								/>
							</Link>
						</button>
					</>
				) : (
					<Link to="/auth/login" className="flex items-center gap-4">
						<IoLogIn
							className={`box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${(location.pathname === '/auth/login' || location.pathname === '/auth/register') && '!bg-primary text-text-light'}`}
						/>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
