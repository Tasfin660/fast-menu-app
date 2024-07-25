// import { useParams } from 'react-router-dom';
import Menu from '../Menu';

const Menus = () => {
	// const { menuId } = useParams();

	return (
		<main className="app-scrollbar shadow-shadowapp grid h-full grid-cols-[repeat(3,350px)] justify-between gap-y-10 overflow-y-scroll rounded-lg px-3 pb-1">
			{/* <p className="col-span-3">ts</p> */}
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
			<Menu />
		</main>
	);
};

export default Menus;
