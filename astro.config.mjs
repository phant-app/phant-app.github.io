// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	integrations: [
		starlight({
			title: 'Phant Docs',
			customCss: ['./src/styles/tailwind.css'],
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
