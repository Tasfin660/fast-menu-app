import { ReactNode } from 'react';
import type { Meal } from './mealTypes';

interface Children {
	children: ReactNode;
}

interface MenuTypes {
	menu: Meal[];
	selectedMeal: {
		_id: string;
		name: string;
	};
	menuLoading: boolean;
	menuError: boolean;
}

interface ContextType {
	getMenu: (menuId: string) => void;
	postMeal: (data: Meal) => void;
	selectMeal: (_id: string, name: string) => void;
	deselectMeal: () => void;
	deleteMeal: () => void;
}

type Action =
	| { type: 'loading' }
	| { type: 'menu/get'; payload: Meal[] }
	| { type: 'meal/add'; payload: Meal }
	| { type: 'meal/select'; payload: { _id: string; name: string } }
	| { type: 'meal/deselect' }
	| { type: 'meal/delete'; payload: string }
	| { type: 'menu/error' };

export type { Action, Children, ContextType, MenuTypes };
