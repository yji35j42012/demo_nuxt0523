export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// router:{
	// 	base:'/demo_nuxt0523/'
	// },
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt_demo',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{ src: "/demo_nuxt0523/js/jquery.min.js", body: true },
			{ src: "/demo_nuxt0523/js/browser.min.js", body: true },
			{ src: "/demo_nuxt0523/js/breakpoints.min.js", body: true },
			{ src: "/demo_nuxt0523/js/util.js", body: true },
			{ src: "/demo_nuxt0523/js/main.js", body: true }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/sass/main.scss"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
