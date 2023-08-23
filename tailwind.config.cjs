/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "var(--primary-color)",
				"secondary": "var(--secondary-color)",
			}
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.title': {
					fontSize: theme('fontSize.4xl'),
					fontWeight: theme('fontWeight.bold'),
				},
				".card-title": {
					color: "var(--card-title__color)",
					fontSize: "var(--card-title__font-size)",

					'&:hover': {
						backgroundColor: "var(--secondary-color)",
					},
				}
			})
		}
	],
}
