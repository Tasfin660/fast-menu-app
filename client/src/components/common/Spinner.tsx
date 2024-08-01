const Spinner = ({ type, css }: { type: string; css?: string }) => {
	return (
		<div className={`my-16 justify-self-center ${css}`}>
			<div className={`${type}-spinner`}></div>
		</div>
	);
};

export default Spinner;
