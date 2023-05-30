var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
	pluginOptions: {
		i18n: {
			locale: 'tr',
			fallbackLocale: 'tr',
			localeDir: 'locales',
			enableLegacy: false,
			runtimeOnly: false,
			compositionOnly: false,
			fullInstall: true
		}
	},
	configureWebpack: {
		plugins: [
			// Make sure that the plugin is after any plugins that add images
			new ImageminPlugin({
				disable: process.env.NODE_ENV !== 'production', // Disable during development
				pngquant: {
					quality: '60'
				},
				jpegtran: {
					quality: '60'
				},
				optipng: {
					optimizationLevel: 9
				},
			})
		]
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "BAU Innovation and Consultancy Inc.";
				return args;
			})
	}
}
