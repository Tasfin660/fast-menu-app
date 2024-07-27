import { ReactNode } from 'react';
import type { Meal } from './mealTypes';

interface Children {
	children: ReactNode;
}

interface User {
	_id?: string;
	username: string;
	image: string;
	role: string;
	meal_list: string[];
	joined: string;
}

interface RegisterType {
	username: string;
	image: string;
	password: string;
	confirmPassword: string;
}

interface LoginType {
	username: string;
	password: string;
}

interface ContextType {
	register: (data: RegisterType) => void;
	login: (data: LoginType) => void;
	logout: () => void;
	authState: () => boolean;
	resetAuthStatus: () => void;
	addMeal: (_id: string) => void;
	removeMeal: (_id: string) => void;
	getMealList: () => Meal[];
}

interface AuthType {
	user: User;
	authStatus: { name: string; message: string };
}

type Action =
	| { type: 'auth/register'; payload: { name: string; message: string } }
	| { type: 'auth/login'; payload: User }
	| { type: 'auth/logout' }
	| { type: 'auth/error'; payload: { name: string; message: string } }
	| { type: 'auth/status/reset' }
	| { type: 'user/meal/add'; payload: string };

export type {
	Action,
	AuthType,
	Children,
	ContextType,
	LoginType,
	RegisterType,
	User
};
