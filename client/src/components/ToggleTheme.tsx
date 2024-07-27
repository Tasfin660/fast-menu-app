import { useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');

	const handleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<button
			className="relative flex items-center gap-4 rounded-full p-2 text-sm text-primary shadow-shadow-app"
			onClick={handleTheme}>
			<IoSunny
				className={`z-10 ${theme === 'light' && 'text-text-light duration-300'}`}
			/>
			<BsMoonStarsFill
				className={`z-10 ${theme === 'dark' && 'divide-red-300 text-text-light'}`}
			/>
			<span
				className={`absolute top-1/2 z-[1] size-6 -translate-y-1/2 rounded-full bg-primary-gradient ${theme === 'light' ? 'left-[5%]' : 'left-[55%]'} transition-[left_transform] duration-300`}></span>
		</button>
	);
};
// 15 53
export default ToggleTheme;
