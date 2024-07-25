import { ReactNode } from 'react';

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

interface Children {
	children: ReactNode;
}

interface ContextType {
	login: (data: LoginType) => void;
	register: (data: RegisterType) => void;
	resetAuthStatus: () => void;
}

interface AuthType {
	user: User;
	authState: boolean;
	authStatus: { name: string; message: string };
}

type Action =
	| { type: 'auth/loading'; payload: { name: string; message: string } }
	| { type: 'auth/register'; payload: { name: string; message: string } }
	| { type: 'auth/login'; payload: User }
	| { type: 'auth/logout' }
	| { type: 'auth/error'; payload: { name: string; message: string } }
	| { type: 'auth/status/reset'; payload: { name: string; message: string } };

export type {
	Action,
	AuthType,
	Children,
	ContextType,
	LoginType,
	RegisterType,
	User
};
