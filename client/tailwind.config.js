/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'font-primary': 'var(--font-primary)',
			'font-secondary': 'var(--font-secondary)'
		},
		container: {
			center: true,
			padding: '3rem'
		},
		extend: {
			space: {
				1.5: '6px',
				2.5: '10px'
			},
			colors: {
				'primary': 'var(--color-primary)',
				'primary-light': 'var(--color-primary-light)',
				'primary-dark': 'var(--color-primary-dark)',
				'secondary': 'var(--color-secondary)',
				'text-light': 'var(--color-text-light)',
				'text-dark': 'var(--color-text-dark)',
				'main-bg': 'var(--color-main-bg)',
				'text-color': 'var(--color-text)'
			},
			backgroundImage: {
				'primary-gradient': 'var(--color-primary-gradient)'
			},
			boxShadow: {
				'shadow-primary': 'var(--box-shadow-primary)',
				'shadow-app': 'var(--box-shadow-app)'
			}
		}
	},
	darkMode: ['selector', '[theme="dark"]'],
	plugins: []
};
