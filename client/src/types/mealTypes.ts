interface Meal {
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

interface MealTypes {
	imgLoading: boolean;
}

type Action = {
	type: 'image/loaded';
};

export type { Action, Meal, MealTypes };
