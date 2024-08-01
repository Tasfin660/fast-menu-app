import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Auth from './components/pages/Auth';
import CreateMeal from './components/pages/CreateMeal';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import NotFound from './components/pages/NotFound';
import Unauthorized from './components/pages/Unauthorized';

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
