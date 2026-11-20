import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeBlack from 'starlight-theme-black'

export default defineConfig({
  integrations: [
    starlight({
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Starlight Black',
      },
      editLink: {
        baseUrl: 'https://github.com/dvtmrn/Sito00/edit/main/docs/',
      },

        plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Home',
              link: '/',
            },
            'getting-started',
            {
              label: 'Tunnel',
              link: '/tunnel/',
            },
            {
              label: 'NPM',
              link: '/npm/',
            },
            {
              label: 'Workers',
              link: '/workers/',
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization', 'markdown-actions'],
        },
        {
          label: 'Examples',
          items: [{ autogenerate: { directory: 'examples' } }],
        },
        {
          label: 'Examples',
          items: [{ autogenerate: { directory: 'app' } }],
        },
      ],
      social: [
        { href: 'https://github.com/adrian-ub/starlight-theme-black', icon: 'github', label: 'GitHub' },
      ],
      title: 'DVTMRN',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        it: { label: 'Italiano', lang: 'it' },
      },
    }),
  ],
})
