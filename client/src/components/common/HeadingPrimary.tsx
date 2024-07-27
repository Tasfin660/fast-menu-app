const HeadingPrimary = ({ context }: { context: string }) => {
	return (
		<h1 className="col-span-2 text-center font-font-secondary text-2xl font-semibold text-secondary">
			{context}
		</h1>
	);
};

export default HeadingPrimary;
