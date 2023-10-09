/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				stone: {
					900: "#836349",
					300: "#AF9A83",
				},
			},
		},
	},
	plugins: [],
};
