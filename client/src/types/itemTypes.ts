interface ItemType {
	imgLoading: boolean;
}

type Action = {
	type: 'image/loaded';
};

export type { Action, ItemType };
