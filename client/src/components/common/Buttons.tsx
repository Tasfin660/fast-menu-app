const PrimaryBtn = ({
	context,
	onClick
}: {
	context: string;
	onClick?: () => void;
}) => {
	return (
		<button
			className="rounded-full bg-primary px-3 py-1 text-text-light duration-300 hover:bg-primary-dark"
			onClick={onClick}>
			{context}
		</button>
	);
};

const SecondaryBtn = ({
	context,
	onClick
}: {
	context: string;
	onClick?: () => void;
}) => {
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
