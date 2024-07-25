import { AuthProvider } from './contexts/AuthContext';
import Router from './Router';

const App = () => {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
};

export default App;
