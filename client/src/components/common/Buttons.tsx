interface Button {
	context: string;
	onClick?: () => void;
}

const PrimaryBtn = ({ context, onClick }: Button) => {
	return (
		<button
			className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark"
			onClick={onClick}>
			{context}
		</button>
	);
};

const SecondaryBtn = ({ context, onClick }: Button) => {
	return (
		<button
			className="rounded-full bg-primary-light px-3 py-1 text-primary duration-300 hover:bg-red-200"
			type="button"
			onClick={onClick}>
			{context}
		</button>
	);
};

export { PrimaryBtn, SecondaryBtn };
