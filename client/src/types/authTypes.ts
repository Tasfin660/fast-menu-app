import { ReactNode } from 'react';

interface Children {
	children: ReactNode;
}

interface User {
	username: string;
	image: string;
	role: string;
	menu_list: string[];
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
	| { type: 'auth/status/reset' };

export type {
	Action,
	AuthType,
	Children,
	ContextType,
	LoginType,
	RegisterType,
	User
};
