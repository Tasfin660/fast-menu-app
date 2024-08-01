import { ReactNode } from 'react';

interface Children {
	children: ReactNode;
}

interface Meal {
	_id?: string;
	category: string;
	name: string;
	image: string;
	price: number;
	tag: string;
	people: number;
	calorie: number;
	rate: number;
	likes?: string[];
}

interface SelectedMeal {
	mealId: string;
	name: string;
}

interface MenuState {
	meals: Meal[];
	selectedMeal: SelectedMeal;
	loading: boolean;
	error: boolean;
}

interface MenuContext {
	getMeals: (category: string) => void;
	createMeal: (data: Meal) => void;
	likeMeal: (mealId: string) => void;
	selectMeal: (mealId: string, name: string) => void;
	deselectMeal: () => void;
	deleteMeal: () => void;
}

type Action =
	| { type: 'loading' }
	| { type: 'meal/select'; payload: SelectedMeal }
	| { type: 'meal/deselect' }
	| { type: 'meals/get'; payload: Meal[] }
	| { type: 'meal/create'; payload: Meal }
	| { type: 'meal/like'; payload: { userId: string; mealId: string } }
	| { type: 'meal/delete'; payload: string }
	| { type: 'error' };

export type { Action, Children, Meal, MenuContext, MenuState };
