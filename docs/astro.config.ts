import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeBlack from 'starlight-theme-black'

export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
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
              label: 'Applicazioni',
              link: '/applicazioni/',
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
              label: 'FileBrowser Quantum',
              link: 'https://fbq.dvtmrn.com',
              attrs: { target: '_blank', rel: 'noopener' },
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
        },
        {
          label: 'Nginx Proxy Manager',
          items: [
            {
              label: 'FileBrowser Quantum',
              link: 'https://fbq.mdv0.duckdns.org',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'SFTPGo',
              link: 'https://sftpgo.mdv0.duckdns.org',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'TrueNAS Scale',
              link: 'https://true.mdv0.duckdns.org',
              attrs: { target: '_blank', rel: 'noopener' },
            },
          ],
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
