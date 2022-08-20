/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		// screens: {
		// 	desktop: '1440px',
		// },
		colors: {
			'dark-teal': '#3c8369',
			cream: '#F2EBE3',
			'dark-blue': '#1C232B',
			'dark-grayish-blue': '#6C7289',
			white: '#FFFFFF',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			fraunces: ['Fraunces', 'serif'],
		},

		extend: {
			backgroundImage: {
				mobile: "url('/images/image-product-mobile.jpg')",
				desktop: "url('/images/image-product-desktop.jpg')",
			},
		},
	},
	plugins: [],
};
