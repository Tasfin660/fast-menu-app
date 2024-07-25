import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
	return (
		<main className="container relative h-screen">
			<section className="absolute left-1/2 top-1/2 grid w-full -translate-x-1/2 -translate-y-1/2 grid-cols-[max-content,1fr] grid-rows-[max-content,max-content,56vh] items-start gap-x-8 gap-y-4 rounded-2xl bg-main-bg p-6 font-font-primary text-text-color shadow-shadow-primary">
				<Sidebar />
				<Navbar />
				<Header />
				<Outlet />
				<Footer />
			</section>
		</main>
	);
};

export default MainLayout;
