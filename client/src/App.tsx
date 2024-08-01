import { MenuProvider } from './contexts/MenuContext';
import { UserProvider } from './contexts/UserContext';
import Router from './Router';

const App = () => {
	return (
		<UserProvider>
			<MenuProvider>
				<Router />
			</MenuProvider>
		</UserProvider>
	);
};

export default App;
