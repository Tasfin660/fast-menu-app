import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import type {
	Action,
	AuthType,
	Children,
	ContextType,
	LoginType,
	RegisterType
} from '../types/authType';

const AuthContext = createContext<undefined | (ContextType & AuthType)>(
	undefined
);

const initialState = {
	user: {
		username: 'User Avocado',
		image: '/user-none.png',
		role: 'user',
		menu_list: [],
		joined: ''
	},
	authState: false,
	authStatus: {
		name: '',
		message: ''
	}
};

const reducer = (state: AuthType, action: Action) => {
	switch (action.type) {
		case 'auth/loading':
			return {
				...state,
				authStatus: action.payload
			};
		case 'auth/register':
			return { ...state, authStatus: action.payload };
		case 'auth/login':
			return { ...state, authState: true, user: action.payload };
		case 'auth/logout':
			return { ...state };
		case 'auth/error':
			return { ...state, authStatus: action.payload };
		case 'auth/status/reset':
			return { ...state, authStatus: action.payload };
		default:
			throw new Error('Action unknown');
	}
};

const AuthProvider = ({ children }: Children) => {
	const [{ user, authState, authStatus }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const register = async (data: RegisterType) => {
		try {
			dispatch({ type: 'auth/loading', payload: { name: '', message: '' } });
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
			dispatch({ type: 'auth/loading', payload: { name: '', message: '' } });
			const res = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				data
			);
			dispatch({ type: 'auth/login', payload: res.data.loggedInUser });
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

	const logout = () => {};

	const resetAuthStatus = () => {
		dispatch({
			type: 'auth/status/reset',
			payload: { name: '', message: '' }
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				authState,
				authStatus,
				login,
				register,
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
