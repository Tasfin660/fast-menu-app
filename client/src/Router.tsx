import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Add from './components/pages/Add';
import Auth from './components/pages/Auth';
import Home from './components/pages/Home';
import Menus from './components/pages/Menus';
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
						{ path: 'menu/:menuId', element: <Menus /> },
						{ path: 'menu/add', element: <Add /> },
						{ path: 'auth/:authId', element: <Auth /> },
						{ path: 'unauthorized', element: <Unauthorized /> },
						{ path: '*', element: <NotFound /> }
					]
				}
			])}
		/>
	);
};

export default Router;
