import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import type {
	Action,
	Children,
	Meal,
	MenuContext,
	MenuState
} from '../types/menuTypes';
import { useUser } from './UserContext';

const MenuContext = createContext<undefined | (MenuContext & MenuState)>(
	undefined
);

const initialState = {
	meals: [],
	selectedMeal: {
		mealId: '',
		name: ''
	},
	loading: false,
	error: false
};

const reducer = (state: MenuState, action: Action) => {
	switch (action.type) {
		case 'loading':
			return { ...state, loading: true };
		case 'meal/select':
			return { ...state, selectedMeal: action.payload };
		case 'meal/deselect':
			return {
				...state,
				selectedMeal: {
					mealId: '',
					name: ''
				}
			};
		case 'meals/get':
			return { ...state, meals: action.payload, loading: false };
		case 'meal/like':
			return {
				...state,
				meals: state.meals.map(meal =>
					meal._id === action.payload.mealId
						? { ...meal, likes: [...meal.likes, action.payload.userId] }
						: meal
				)
			};
		case 'meal/delete':
			return {
				...state,
				meals: state.meals.filter(meal => meal._id !== action.payload),
				loading: false
			};
		case 'error':
			return { ...state, loading: false, error: true };
		default:
			throw new Error('Action unknown!');
	}
};

const MenuProvider = ({ children }: Children) => {
	const { user } = useUser();

	const [cookies] = useCookies(['jwt']);
	const [{ meals, selectedMeal, loading, error }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const getMeals = async (category: string) => {
		dispatch({ type: 'loading' });
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/menu/meals/${category}`
			);
			dispatch({ type: 'meals/get', payload: res.data.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: 'error' });
		}
	};

	const createMeal = async (data: Meal) => {
		try {
			await axios.post(`${import.meta.env.VITE_BASE_URL}/menu/meals`, data, {
				headers: { Authorization: `Bearer ${cookies.jwt}` }
			});
		} catch (err) {
			dispatch({ type: 'error' });
		}
	};

	const likeMeal = async (mealId: string) => {
		try {
			await axios.put(
				`${import.meta.env.VITE_BASE_URL}/menu/meals`,
				{ mealId },
				{
					headers: { Authorization: `Bearer ${cookies.jwt}` }
				}
			);
			dispatch({
				type: 'meal/like',
				payload: {
					userId: user._id,
					mealId
				}
			});
		} catch (err) {
			console.log(err);
			dispatch({ type: 'error' });
		}
	};

	const selectMeal = (mealId: string, name: string) => {
		dispatch({ type: 'meal/select', payload: { mealId, name } });
	};

	const deselectMeal = () => {
		dispatch({ type: 'meal/deselect' });
	};

	const deleteMeal = async () => {
		deselectMeal();
		dispatch({ type: 'loading' });
		try {
			await axios.delete(
				`${import.meta.env.VITE_BASE_URL}/menu/meals/${selectedMeal.mealId}`,
				{
					headers: { Authorization: `Bearer ${cookies.jwt}` }
				}
			);
			dispatch({ type: 'meal/delete', payload: selectedMeal.mealId });
		} catch (error) {
			dispatch({ type: 'error' });
		}
	};

	return (
		<MenuContext.Provider
			value={{
				meals,
				selectedMeal,
				loading,
				error,
				getMeals,
				createMeal,
				likeMeal,
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
