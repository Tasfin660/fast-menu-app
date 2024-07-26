import { useParams } from 'react-router-dom';
import Menu from '../Menu';

const Menus = () => {
	const { menuId } = useParams();
	console.log(menuId);

	return (
		<main className="app-scrollbar shadow-shadowapp grid h-full grid-cols-[repeat(3,350px)] justify-between gap-y-9 overflow-y-scroll rounded-lg py-1 pl-3 pr-6">
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
