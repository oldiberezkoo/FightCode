import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/**/*.{tsx, scss}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				titleColor: "#EFEDEE",
				paragraphColor: "#838186",
			},
			backgroundColor: {
				buttonBackground: "#87EAD5",
			},
		},
	},
	plugins: [],
}

export default config
