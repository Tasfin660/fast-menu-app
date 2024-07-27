import { createContext, useContext, useReducer } from 'react';
import type {
	Action,
	Children,
	ContextType,
	MenuTypes
} from '../types/menuTypes';
import axios from 'axios';
import { Meal } from '../types/mealTypes';

const MenuContext = createContext<undefined | (ContextType & MenuTypes)>(
	undefined
);

const initialState = {
	menu: [],
	selectedMeal: {
		_id: '',
		name: ''
	},
	menuLoading: false,
	menuError: false
};

const reducer = (state: MenuTypes, action: Action) => {
	switch (action.type) {
		case 'loading':
			return { ...state, menuLoading: true };
		case 'menu/get':
			return { ...state, menu: action.payload, menuLoading: false };
		case 'meal/add':
			return { ...state, menu: [...state.menu, action.payload] };
		case 'meal/select':
			return { ...state, selectedMeal: action.payload };
		case 'meal/deselect':
			return {
				...state,
				selectedMeal: {
					_id: '',
					name: ''
				}
			};
		case 'meal/delete':
			return {
				...state,
				menu: state.menu.filter(meal => meal._id !== action.payload),
				menuLoading: false
			};
		case 'menu/error':
			return { ...state, menuLoading: false, menuError: true };
		default:
			throw new Error('Action unknown!');
	}
};

const MenuProvider = ({ children }: Children) => {
	const [{ menu, selectedMeal, menuLoading, menuError }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const getMenu = async (menuId: string) => {
		dispatch({ type: 'loading' });
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/menu/${menuId}`
			);
			dispatch({ type: 'menu/get', payload: res.data });
		} catch (err) {
			dispatch({ type: 'menu/error' });
			console.error(err?.data.message);
		}
	};

	const postMeal = async (data: Meal) => {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/menu/add-meal`,
				data
			);
			dispatch({ type: 'meal/add', payload: res.data });
		} catch (err) {
			dispatch({ type: 'menu/error' });
			console.error(err?.data.message);
		}
	};

	const selectMeal = (_id: string, name: string) => {
		dispatch({ type: 'meal/select', payload: { _id, name } });
	};

	const deselectMeal = () => {
		dispatch({ type: 'meal/deselect' });
	};

	const deleteMeal = async () => {
		dispatch({ type: 'loading' });
		try {
			await axios.delete(
				`${import.meta.env.VITE_BASE_URL}/menu/delete/${selectedMeal._id}`
			);
			dispatch({ type: 'meal/delete', payload: selectedMeal._id });
			deselectMeal();
		} catch (error) {
			dispatch({ type: 'menu/error' });
			console.error(err?.data.message);
		}
	};
	return (
		<MenuContext.Provider
			value={{
				menu,
				selectedMeal,
				menuLoading,
				menuError,
				getMenu,
				postMeal,
				selectMeal,
				deselectMeal,
				deleteMeal
			}}>
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
