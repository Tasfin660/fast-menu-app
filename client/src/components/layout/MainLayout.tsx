import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
	return (
		<main className="dark:bg-cl-gray-light container my-16 grid w-full grid-cols-[max-content,1fr] grid-rows-[max-content,max-content,485px] items-start gap-x-8 gap-y-4 rounded-2xl bg-theme-app-bg p-6 font-font-primary text-text-color shadow-shadow-primary duration-300 dark:shadow-none">
			<Sidebar />
			<Navbar />
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
