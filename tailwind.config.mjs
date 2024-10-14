import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#15EDA3',
				'secondary': '#00ff00',
			},
		},
	},
	plugins: [animations],
}
