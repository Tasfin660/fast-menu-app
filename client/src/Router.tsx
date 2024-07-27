import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Add from './components/pages/Add';
import Auth from './components/pages/Auth';
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
						{ path: 'menu/:menuId', element: <Menu /> },
						{ path: 'menu/add-meal', element: <Add /> },
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
