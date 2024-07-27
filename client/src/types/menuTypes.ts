import { ReactNode } from 'react';

interface Children {
	children: ReactNode;
}

interface Menu {
	_id?: string;
	category: string;
	name: string;
	image: string;
	price: number;
	tag: string;
	people: number;
	rate: number;
	likes?: number;
}

interface MenuType {
	menus: Menu[];
	menuLoading: boolean;
	menuError: boolean;
}

interface ContextType {
	getMenus: (menuId: string) => void;
}

type Action =
	| { type: 'loading' }
	| { type: 'menus/get'; payload: Menu[] }
	| { type: 'menu/error' };

export type { Action, Children, ContextType, Menu, MenuType };
