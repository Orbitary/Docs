import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightUtils from '@lorenzo_lewis/starlight-utils'

export default defineConfig({
	integrations: [
		starlight({
			title: 'Orbitary Docs',
			description: 'Documentation for Bits and PacketNinja - Minecraft development utilities',
		logo: {
			src: './src/assets/houston.webp',
		},
		social: [
			{
				icon: 'github',
				label: 'GitHub',
				href: 'https://github.com/Orbitary',
			},
		],
		editLink: {
				baseUrl: 'https://github.com/ImBit/Bits-wiki/edit/main/',
			},
			components: {
				Footer: './src/components/Footer.astro',
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
						{ label: 'Overview', slug: 'bits' },
						{
							label: 'Getting Started',
							items: [
								{ label: 'What is Bits?', slug: 'bits/getting-started/what-is-bits' },
								{ label: 'Installation', slug: 'bits/getting-started/installation' },
								{ label: 'Quick Start', slug: 'bits/getting-started/quick-start' },
								{ label: 'Core Concepts', slug: 'bits/getting-started/core-concepts' },
							],
						},
						{
							label: 'Core API',
							collapsed: true,
							items: [
								{ label: 'Text Formatting', slug: 'bits/core/text-formatting' },
								{ label: 'Color API', slug: 'bits/core/color-api' },
								{ label: 'Sound API', slug: 'bits/core/sound-api' },
								{ label: 'Math Utilities', slug: 'bits/core/math-utilities' },
							],
						},
						{
							label: 'Minecraft',
							collapsed: false,
							items: [
								{ label: 'Overview', slug: 'bits/minecraft' },
								{
									label: 'Commands',
									collapsed: false,
									autogenerate: { directory: 'bits/minecraft/commands' },
								},
								{
									label: 'Events',
									collapsed: true,
									items: [
										{ label: 'Event System', slug: 'bits/minecraft/events' },
									],
								},
								{
									label: 'Platforms',
									collapsed: true,
									items: [
										{ label: 'Paper', slug: 'bits/minecraft/platform/paper' },
										{ label: 'Velocity', slug: 'bits/minecraft/platform/velocity' },
										{ label: 'Fabric', slug: 'bits/minecraft/platform/fabric' },
									],
								},
							],
						},
						{
							label: 'API Reference',
							collapsed: true,
							items: [
								{ label: 'Annotations', slug: 'bits/api-reference/annotations' },
								{ label: 'Interfaces', slug: 'bits/api-reference/interfaces' },
							],
						},
						{
							label: 'Guides',
							collapsed: true,
							items: [
								{ label: 'Creating Commands', slug: 'bits/guides/creating-commands' },
								{ label: 'Multi-Platform Development', slug: 'bits/guides/multi-platform' },
								{ label: 'Best Practices', slug: 'bits/guides/best-practices' },
							],
						},
					],
				},
				{
					label: 'PacketNinja',
					items: [
						{ label: 'Overview', slug: 'packetninja' },
						{
							label: 'Getting Started',
							items: [
								{ label: 'Installation', slug: 'packetninja/getting-started/installation' },
								{ label: 'Quick Start', slug: 'packetninja/getting-started/quick-start' },
							],
						},
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'Packet Logging', slug: 'packetninja/features/packet-logging' },
								{ label: 'Formatting', slug: 'packetninja/features/formatting' },
								{ label: 'Filtering', slug: 'packetninja/features/filtering' },
							],
						},
						{
							label: 'Guides',
							collapsed: true,
							items: [
								{ label: 'Debugging Packets', slug: 'packetninja/guides/debugging-packets' },
							],
						},
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'How to Contribute', slug: 'contributing' },
						{ label: 'Style Guide', slug: 'contributing/style-guide' },
					],
				},
			],
		}),
	],
})