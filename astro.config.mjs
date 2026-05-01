// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import umami from "@yeskunall/astro-umami";

const siteUrl = process.env.SITE_URL ?? 'https://phant-app.github.io';
const socialImageUrl = new URL('/phant-metaimage.jpg', siteUrl).toString();


// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	integrations: [
		umami({ id: '25161f87-59c3-4c4b-a4f9-894a18cd5afd'}),
		starlight({
			title: 'Phant Docs',
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: socialImageUrl } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: socialImageUrl } },
			],
			customCss: ['./src/styles/tailwind.css', './src/styles/docs-theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/phant-app/phant' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Quickstart on Linux', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
