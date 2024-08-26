import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Auth from './pages/Auth';
import CreateMeal from './pages/CreateMeal';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

const Router = () => {
	return (
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '*',
					element: <MainLayout />,
					children: [
						{ index: true, element: <Home /> },
						{ path: 'menu/meals/:category', element: <Menu /> },
						{ path: 'menu/meals/create', element: <CreateMeal /> },
						{ path: 'users/:formId', element: <Auth /> },
						{ path: 'unauthorized', element: <Unauthorized /> },
						{ path: '*', element: <NotFound /> }
					]
				}
			])}
		/>
	);
};

export default Router;
