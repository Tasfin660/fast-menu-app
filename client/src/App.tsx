import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import Router from './Router';

const App = () => {
	return (
		<MenuProvider>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</MenuProvider>
	);
};

export default App;
