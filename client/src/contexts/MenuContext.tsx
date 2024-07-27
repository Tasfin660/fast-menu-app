import { createContext, useContext, useReducer } from 'react';
import type {
	Action,
	Children,
	ContextType,
	MenuType
} from '../types/menuTypes';
import axios from 'axios';

const MenuContext = createContext<undefined | (ContextType & MenuType)>(
	undefined
);

const initialState = {
	menus: [],
	menuLoading: false,
	menuError: false
};

const reducer = (state: MenuType, action: Action) => {
	switch (action.type) {
		case 'loading':
			return { ...state, menuLoading: true };
		case 'menus/get':
			return { ...state, menus: action.payload, menuLoading: false };
		case 'menu/error':
			return { ...state, menuLoading: false, menuError: true };
		default:
			throw new Error('Action unknown!');
	}
};

const MenuProvider = ({ children }: Children) => {
	const [{ menus, menuLoading, menuError }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const getMenus = async (menuId: string) => {
		dispatch({ type: 'loading' });
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/menu/${menuId}`
			);
			dispatch({ type: 'menus/get', payload: res.data });
		} catch (err) {
			dispatch({ type: 'menu/error' });
			console.error(err?.data.message);
		}
	};

	return (
		<MenuContext.Provider value={{ menus, menuLoading, menuError, getMenus }}>
			{children}
		</MenuContext.Provider>
	);
};

const useMenu = () => {
	const context = useContext(MenuContext);

	if (context === undefined)
		throw new Error('MenuContext was used outside the MenuProvider');
	return context;
};

export { MenuProvider, useMenu };
