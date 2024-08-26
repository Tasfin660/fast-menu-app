import { FaCrown } from 'react-icons/fa';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import { useUser } from '../../contexts/UserContext';
import LoadingImage from '../common/LoadingImage';

const Navbar = () => {
	const { user, logout, authState } = useUser();
	const { selectedMeal, deselectMeal, deleteMeal } = useMenu();
	const { username, image, role } = user;
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<nav className="dark:bg-cl-gray-neutral col-start-2 col-end-3 flex items-center justify-between overflow-hidden rounded-full bg-theme-component-bg p-2 pr-4 shadow-shadow-app duration-300 dark:text-text-light">
			<figure className="flex items-center">
				<LoadingImage
					lImgSrc="/user-none-big.png"
					lImgStyle="w-10 rounded-full"
					src={image}
					alt="user"
					style="w-10 rounded-full"
				/>
				<figcaption className="ml-4 mr-2 font-medium">{username}</figcaption>
				{role === 'Admin' && <FaCrown className="text-sm text-secondary" />}
			</figure>
			{selectedMeal?.mealId && (
				<div className="nav-noti flex items-center gap-1">
					<p>
						Proceed to delete&nbsp;
						<span className="font-font-secondary font-semibold text-secondary">
							{selectedMeal.name}
						</span>
						?
					</p>
					<button
						className="ml-1 text-2xl text-primary duration-300 hover:text-primary-dark"
						onClick={deselectMeal}>
						<IoIosCloseCircle />
					</button>
					<button
						className="text-2xl text-emerald-400 duration-300 hover:text-emerald-500"
						onClick={deleteMeal}>
						<IoIosCheckmarkCircle />
					</button>
				</div>
			)}
			<div className="flex items-center gap-4">
				{authState() ? (
					<>
						<Link to="menu/meals/create" className="flex items-center gap-4">
							<MdOutlineBookmarkAdd
								className={`dark:bg-cl-gray-light box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${pathname === '/menu/add' && '!bg-primary text-text-light'}`}
							/>
						</Link>
						<button onClick={handleLogout}>
							<Link to="/" className="flex items-center gap-4">
								<IoLogOut
									className={`dark:bg-cl-gray-light box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${(pathname === '/users/login' || pathname === '/users/register') && '!bg-primary text-text-light'}`}
								/>
							</Link>
						</button>
					</>
				) : (
					<Link to="/users/login" className="flex items-center gap-4">
						<IoLogIn
							className={`dark:bg-cl-gray-light box-content rounded-full bg-primary-light px-3 py-1.5 text-xl text-primary duration-300 hover:bg-primary hover:text-text-light ${(pathname === '/users/login' || pathname === '/users/register') && '!bg-primary text-text-light'}`}
						/>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
