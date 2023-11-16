/** @type {import('tailwindcss').Config} */
module.exports = {
	tailwindConfig: "./tailwind.config.js",
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"neutral-50": "#F9F9F9",
				"neutral-1000": "#000",
				"twitter-blue-default": "#1D9BF0",
				"twitter-blue-hover": "#1871CA",
				"twitter-blue-disabled": "#1E5D87",
				"searchbar-fill": "#212327",
				stroke: "rgba(29, 155, 240, 0.24)",
				"card-fill": " #16181C ",
				secondary: "rgba(255, 255, 255, 0.6)",
			},
			boxShadow: {
				hover1: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
			},
			fontFamily: {
				inter: "Inter",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
}
