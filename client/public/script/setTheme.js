/**
 * @returns {'dark'|'light'}
 */
globalThis.getTheme = () => {
	/** @type {any} */
	let theme = globalThis.localStorage.getItem('theme');
	if (theme !== 'light' && theme !== 'dark') {
		theme = 'light';
		globalThis.localStorage.setItem('theme', theme);
	}
	return theme;
};

/**
 * @param {'dark'|'light'|undefined} [theme]
 */
globalThis.setTheme = (theme = undefined) => {
	if (!theme) theme = globalThis.getTheme();
	else {
		if (theme !== 'light' && theme !== 'dark') {
			theme = 'light';
		}
		globalThis.localStorage.setItem('theme', theme);
	}

	const root = globalThis.document.querySelector(':root');

	if (theme === 'light') root.setAttribute('theme', 'light');
	else if (theme === 'dark') root.setAttribute('theme', 'dark');
};

globalThis.setTheme();
