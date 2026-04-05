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
						{
							label: 'Minecraft',
							items: [
								{ slug: 'bits/minecraft' },
								{
									label: 'Commands',
									collapsed: false,
									autogenerate: { directory: 'bits/minecraft/commands' },
								},
								{
									label: 'Paper',
									autogenerate: { directory: 'bits/minecraft/platform/paper' },
								},
								{
									label: 'Velocity',
									autogenerate: { directory: 'bits/minecraft/platform/velocity' },
								},
								{
									label: 'Fabric',
									autogenerate: { directory: 'bits/minecraft/platform/fabric' },
								},
							],
						},
						{
							label: 'Contributing',
							collapsed: true,
							autogenerate: { directory: 'bits/contributing' },
						},
						{
							label: 'Misc',
							collapsed: true,
							autogenerate: { directory: 'bits/misc' },
						},
					],
				},
			],
		}),
	],
})