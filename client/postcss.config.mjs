/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: {
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		},
	},
}

export default config
