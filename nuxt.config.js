import { defineNuxtConfig } from "nuxt3"
import { site } from "./lib/constants"

export default defineNuxtConfig({
	meta: {
		htmlAttrs: {
			lang: "id",
		},
		bodyAttrs: {
			class: "text-lg font-light ",
		},
		title: site.title,
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },

			{ hid: "description", name: "description", content: site.description },

			{ name: "og:title", content: site.title },
			{ name: "og:site_name", content: site.title },
			{ name: "og:description", content: site.description },
			{ name: "og:type", content: "website" },
			{ name: "og:url", content: `${site.url}/` },
			{ name: "og:image", content: `${site.url}/og.png` },

			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: site.title },
			{ name: "twitter:description", content: site.description },
			{ name: "twitter:image", content: `${site.url}/og.png` },
		],
	},
	buildModules: ["@unocss/nuxt"],
	unocss: {
		uno: true,
		preflight: true,
		icons: {
			scale: 1.25,
		},
	},
})
