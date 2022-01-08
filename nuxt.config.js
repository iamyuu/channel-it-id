import { defineNuxtConfig } from "nuxt3";
import { site } from "./lib/constants";

export default defineNuxtConfig({
	meta: {
		htmlAttrs: {
			lang: "id",
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
		link: [{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	buildModules: ["@unocss/nuxt"],
	unocss: {
		uno: true,
		preflight: true,
		icons: {
			scale: 1.25,
		},
		theme: {
			colors: {
				dark: "hsl(247deg, 24%, 7%)",
				light: "hsl(60deg, 100%, 100%)",
				primary: "hsl(32deg, 100%, 51%)",
				secondary: "hsl(7deg, 86%, 62%)",
				tertiary: "hsl(339deg, 78%, 55%)",
			},
		},
		rules: [
			[
				/^grid-cols-auto-w-(\d+)$/,
				([, val]) => ({
					"grid-template-columns": `repeat(auto-fit, minmax(${parseInt(val) / 4}rem, 1fr))`,
				}),
			],
		],
		shortcuts: [
			{
				card: "bg-light text-dark p-4 h-64 relative rounded",
				"card-title": "text-2xl font-bold text-tertiary truncate",
				"card-body": "mt-2",
				"card-action": "absolute bottom-4 right-4",

				"btn-icon": "inline-flex items-center gap-4",
			},
			[/^btn-(.*)$/, ([, color]) => `bg-${color} text-light font-semibold hover:opacity-75 py-2 px-4 rounded`],
		],
	},
});
