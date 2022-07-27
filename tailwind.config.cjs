/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--international-orange-aerospace)',
				secondary: 'var(--deep-champagne)'
			}
		}
	},
	plugins: []
};
