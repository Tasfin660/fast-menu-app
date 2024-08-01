import { UserProvider } from './contexts/UserContext';
import { MenuProvider } from './contexts/MenuContext';
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
