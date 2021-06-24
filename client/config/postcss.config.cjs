module.exports = {
	plugins: [
		"autoprefixer",
		[
			"postcss-short",
			{ prefix: "x" }
		],
		"postcss-preset-env"
	]
}
