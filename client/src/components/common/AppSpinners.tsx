const AddSpinner = () => {
	return (
		<div className="my-16 flex w-80 justify-center justify-self-end">
			<div className="auth-spinner"></div>
		</div>
	);
};

const AuthSpinner = ({ css }: { css?: string }) => {
	return (
		<div className={`my-16 justify-self-center ${css}`}>
			<div className="auth-spinner"></div>
		</div>
	);
};

const MenuSpinner = () => {
	return (
		<div className="my-16 justify-self-center">
			<div className="menu-spinner"></div>
		</div>
	);
};

export { AddSpinner, AuthSpinner, MenuSpinner };
