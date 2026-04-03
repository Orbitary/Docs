import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightUtils from '@lorenzo_lewis/starlight-utils'

export default defineConfig({
	integrations: [
		starlight({
			title: 'Bit Docs',
			editLink: {
				baseUrl: 'https://github.com/ImBit/Bit-Docs/',
			},
			plugins: [
				starlightUtils({
					multiSidebar: {
						switcherStyle: 'horizontalList',
					},
				}),
			],
			sidebar: [
				{
					label: 'Bits',
					items: [
						{ slug: 'bits' },
						{
							label: 'Getting started',
							autogenerate: { directory: 'bits/getting-started' },
						},
						// {
						// 	label: 'API',
						// 	items: [
						// 		{
						// 			label: 'Commands',
						// 			collapsed: false,
						// 			autogenerate: { directory: 'bits/api/commands' },
						// 		},
						// 		{
						// 			label: 'Text & formatting',
						// 			collapsed: true,
						// 			autogenerate: { directory: 'bits/api/text' },
						// 		},
						// 		{
						// 			label: 'Utilities',
						// 			collapsed: true,
						// 			autogenerate: { directory: 'bits/api/utilities' },
						// 		},
						// 	],
						// },
						// {
						// 	label: 'Paper',
						// 	badge: { text: 'Paper', variant: 'note' },
						// 	autogenerate: { directory: 'bits/paper' },
						// },
						// {
						// 	label: 'Velocity',
						// 	badge: { text: 'Velocity', variant: 'tip' },
						// 	autogenerate: { directory: 'bits/velocity' },
						// },
						// {
						// 	label: 'Contributing',
						// 	collapsed: true,
						// 	autogenerate: { directory: 'bits/contributing' },
						// },
						// {
						// 	label: 'Misc',
						// 	collapsed: true,
						// 	autogenerate: { directory: 'bits/misc' },
						// },
					],
				},

				{
					label: 'PacketNinja',
					items: [
						{ slug: 'packetninja' },
						// {
						// 	label: 'Getting started',
						// 	autogenerate: { directory: 'packetninja/getting-started' },
						// },
						// {
						// 	label: 'Usage',
						// 	autogenerate: { directory: 'packetninja/usage' },
						// },
						// {
						// 	label: 'API',
						// 	badge: { text: 'Coming soon', variant: 'caution' },
						// 	autogenerate: { directory: 'packetninja/api' },
						// },
						// {
						// 	label: 'Contributing',
						// 	collapsed: true,
						// 	autogenerate: { directory: 'packetninja/contributing' },
						// },
						// {
						// 	label: 'Misc',
						// 	collapsed: true,
						// 	autogenerate: { directory: 'packetninja/misc' },
						// },
					],
				},
			],
		}),
	],
})