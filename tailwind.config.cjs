/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			roboto: ['roboto', 'sans-serif'],
		},
		extend: {
			keyframes: {
				fade: {
					'0%': { backgroundColor: '#fde68a' },
					'20%': { backgroundColor: '#fcd34d' },
					'40%': { backgroundColor: '#fbbf24' },
					'60%': { backgroundColor: '#f59e0b' },
					'80%': { backgroundColor: '#fbbf24' },
					'100%': { backgroundColor: '#fcd34d' },
				},
			},
			animation: {
				fade: 'fade 9s linear infinite',
			},
		},
	},
	plugins: [],
};
