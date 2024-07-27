import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import type {
	Action,
	AuthType,
	Children,
	ContextType,
	LoginType,
	RegisterType
} from '../types/authTypes';

const AuthContext = createContext<undefined | (ContextType & AuthType)>(
	undefined
);

const initialUser = {
	username: 'User Avocado',
	image: '/user-none.png',
	role: 'user',
	menu_list: [],
	joined: ''
};

const initialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') || '')
		: initialUser,
	authStatus: {
		name: '',
		message: ''
	}
};

const reducer = (state: AuthType, action: Action) => {
	switch (action.type) {
		case 'auth/register':
			return { ...state, authStatus: action.payload };
		case 'auth/login':
			return { ...state, user: action.payload };
		case 'auth/logout':
			return { ...state, user: initialUser };
		case 'auth/error':
			return { ...state, authStatus: action.payload };
		case 'auth/status/reset':
			return { ...state, authStatus: { name: '', message: '' } };
		default:
			throw new Error('Action unknown!');
	}
};

const AuthProvider = ({ children }: Children) => {
	const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
	const [{ user, authStatus }, dispatch] = useReducer(reducer, initialState);

	const register = async (data: RegisterType) => {
		try {
			dispatch({
				type: 'auth/status/reset'
			});
			await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, data);
			dispatch({
				type: 'auth/register',
				payload: {
					name: 'Action Successful!',
					message: 'User registration completed. Please log in to proceed.'
				}
			});
		} catch (err) {
			dispatch({
				type: 'auth/error',
				payload: err?.response?.data || {
					name: 'Server Error!',
					message:
						'An error occurred while registering the user. Please try again later.'
				}
			});
		}
	};

	const login = async (data: LoginType) => {
		try {
			dispatch({
				type: 'auth/status/reset'
			});
			const res = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				data
			);
			dispatch({ type: 'auth/login', payload: res.data.userInfo });
			setCookie('authToken', res.data.token, { path: '/' });
			localStorage.setItem('user', JSON.stringify(res.data.userInfo));
		} catch (err) {
			dispatch({
				type: 'auth/error',
				payload: err?.response?.data || {
					name: 'Server Error!',
					message: 'An error occurred while logging in. Please try again later.'
				}
			});
		}
	};

	const logout = () => {
		dispatch({ type: 'auth/logout' });
		removeCookie('authToken', { path: '/' });
		localStorage.setItem('user', JSON.stringify(initialUser));
	};

	const authState = () => {
		return !!cookies.authToken;
	};

	const resetAuthStatus = () => {
		dispatch({
			type: 'auth/status/reset'
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				authStatus,
				register,
				login,
				logout,
				authState,
				resetAuthStatus
			}}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined)
		throw new Error('AuthProvider was used outside the AuthProvider');
	return context;
};

export { AuthProvider, useAuth };
