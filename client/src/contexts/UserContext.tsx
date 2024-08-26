import axios, { isAxiosError } from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { useCookies } from 'react-cookie';

import type {
	Action,
	Children,
	Login,
	Register,
	UserContext,
	UserState
} from '../types/userTypes';

const UserContext = createContext<undefined | (UserContext & UserState)>(
	undefined
);

const initialUser = {
	_id: 'a76b1a6fb6e24f97b940',
	username: 'User Avocado',
	image: '/user-none.png',
	role: 'user',
	meals: [],
	joined: ''
};

const initialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') || '')
		: initialUser,
	userMeals: [],
	loading: false,
	authStatus: {
		status: '',
		message: ''
	},
	error: false
};

const reducer = (state: UserState, action: Action) => {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				loading: true,
				error: false
			};
		case 'auth/status':
			return { ...state, authStatus: action.payload };
		case 'auth/login':
			return { ...state, user: action.payload };
		case 'auth/logout':
			return { ...state, user: initialUser };
		case 'meals/get':
			return { ...state, userMeals: action.payload, loading: false };
		case 'meal/add':
			return {
				...state,
				user: { ...state.user, meals: [...state.user.meals, action.payload] }
			};
		case 'meal/remove':
			return {
				...state,
				user: {
					...state.user,
					meals: state.user.meals.filter(id => id !== action.payload)
				},
				userMeals: state.userMeals.filter(meal => meal._id !== action.payload),
				loading: false
			};
		case 'error':
			return { ...state, loading: false, error: true };
		default:
			throw new Error('Action unknown!');
	}
};

const UserProvider = ({ children }: Children) => {
	const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
	const [{ user, userMeals, authStatus, loading, error }, dispatch] =
		useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	const resetAuthStatus = () => {
		dispatch({
			type: 'auth/status',
			payload: {
				status: '',
				message: ''
			}
		});
	};

	const register = async (data: Register) => {
		resetAuthStatus();
		try {
			const res = await axios.post(`/api/v1/users/register`, data);
			dispatch({ type: 'auth/status', payload: res.data });
		} catch (err: unknown) {
			if (isAxiosError(err)) {
				if (err.response)
					dispatch({ type: 'auth/status', payload: err.response.data });
				else
					dispatch({
						type: 'auth/status',
						payload: {
							status: 'failed',
							message:
								'Request made, but no response received or request failed.'
						}
					});
			}
		}
	};

	const login = async (data: Login) => {
		resetAuthStatus();
		try {
			const res = await axios.post(`/api/v1/users/login`, data);
			setCookie('jwt', res.data.token, { path: '/' });
			localStorage.setItem('user', JSON.stringify(res.data.data));
			dispatch({ type: 'auth/login', payload: res.data.data });
		} catch (err: unknown) {
			if (isAxiosError(err)) {
				if (err.response)
					dispatch({ type: 'auth/status', payload: err.response.data });
				else
					dispatch({
						type: 'auth/status',
						payload: {
							status: 'failed',
							message:
								'Request made, but no response received or request failed.'
						}
					});
			}
		}
	};

	const logout = () => {
		removeCookie('jwt', { path: '/' });
		localStorage.setItem('user', JSON.stringify(initialUser));
		dispatch({ type: 'auth/logout' });
	};

	const deleteUser = async () => {
		try {
			await axios.delete(`/api/v1/users`, {
				headers: { Authorization: `Bearer ${cookies.jwt}` }
			});
			logout();
		} catch (err) {
			dispatch({ type: 'error' });
		}
	};

	const authState = () => {
		return !!cookies.jwt;
	};

	const getUserMeals = async () => {
		dispatch({ type: 'loading' });
		try {
			const res = await axios.get(`/api/v1/users/meals`, {
				headers: { Authorization: `Bearer ${cookies.jwt}` }
			});
			dispatch({ type: 'meals/get', payload: res.data.data });
		} catch (err) {
			dispatch({ type: 'error' });
		}
	};

	const addMeal = async (mealId: string) => {
		try {
			await axios.put(
				`/api/v1/users/meals`,
				{ mealId },
				{
					headers: { Authorization: `Bearer ${cookies.jwt}` }
				}
			);
			dispatch({
				type: 'meal/add',
				payload: mealId
			});
		} catch (err) {
			dispatch({ type: 'error' });
		}
	};

	const removeMeal = async (mealId: string) => {
		dispatch({ type: 'loading' });
		try {
			await axios.delete(`/api/v1/users/meals/${mealId}`, {
				headers: { Authorization: `Bearer ${cookies.jwt}` }
			});
			dispatch({ type: 'meal/remove', payload: mealId });
		} catch (err) {
			dispatch({ type: 'error' });
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				userMeals,
				authStatus,
				loading,
				error,
				authState,
				resetAuthStatus,
				register,
				login,
				logout,
				deleteUser,
				getUserMeals,
				addMeal,
				removeMeal
			}}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => {
	const context = useContext(UserContext);

	if (context === undefined)
		throw new Error('UserProvider was used outside the UserProvider');
	return context;
};

export { UserProvider, useUser };
