import { ReactNode } from 'react';

interface Children {
	children: ReactNode;
}

interface User {
	_id?: string;
	username: string;
	image: string;
	role: string;
	meals: string[];
	joined: string;
}

interface UserMeal {
	_id?: string;
	name: string;
	image: string;
	category: string;
}

interface Register {
	username: string;
	image: string;
	password: string;
	confirmPassword: string;
}

interface Login {
	username: string;
	password: string;
}

interface AuthStatus {
	status: string;
	message: string;
}

interface UserState {
	user: User;
	userMeals: UserMeal[];
	loading: boolean;
	authStatus: AuthStatus;
	error: boolean;
}

interface UserContext {
	authState: () => boolean;
	resetAuthStatus: () => void;
	register: (data: Register) => void;
	login: (data: Login) => void;
	logout: () => void;
	addMeal: (mealId: string) => void;
	getUserMeals: () => void;
	removeMeal: (mealId: string) => void;
}

type Action =
	| { type: 'loading' }
	| { type: 'auth/status'; payload: AuthStatus }
	| { type: 'auth/login'; payload: User }
	| { type: 'auth/logout' }
	| { type: 'meals/get'; payload: UserMeal[] }
	| { type: 'meal/add'; payload: string }
	| { type: 'meal/remove'; payload: string }
	| { type: 'error' };

export type {
	Action,
	Children,
	Login,
	Register,
	User,
	UserContext,
	UserMeal,
	UserState
};
