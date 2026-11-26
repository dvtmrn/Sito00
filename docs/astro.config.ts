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
          label: 'Barra_1',
          items: ['getting-started', 'customization', 'markdown-actions'],
        },
        {
          label: 'Tunnel Cloudflare',
          items: [
            {
             label: 'App su Tunnel',
             collapsed: true, // true = chiusa all'apertura (clicchi per aprire), false = già aperta
             items: [
               {
                 label: 'FileBrowser Quantum',
                 link: 'https://fbq.dvtmrn.com',
                 attrs: { target: '_blank', rel: 'noopener' }, // apre in una nuova scheda (opzionale)
               },
               {
                 label: 'SFTPGo',
                 link: 'https://sftpgo.dvtmrn.com',
                 attrs: { target: '_blank', rel: 'noopener' },
               },
               {
                 label: 'TrueNAS Scale',
                 link: 'https://true.dvtmrn.com',
                 attrs: { target: '_blank', rel: 'noopener' },
               },
                    ],
        {
          label: 'Nginx Proxy Manager',
          items: [{ autogenerate: { directory: 'npm' } }],
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
