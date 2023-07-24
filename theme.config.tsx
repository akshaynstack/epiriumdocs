import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  banner: {
    key: '1.0-release',
    text: (
      <a href="#" target="_blank">
        🎉 Epirium 1.0 is released. BETA →
      </a>
    )
  },
  logo: <span>Epirium Docs</span>,
  project: {
    link: 'https://github.com/akshaynstack/epiriumdocs',
  },
  chat: {
    link: 'https://twitter.com/akshaynceo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
        ></path>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/akshaynstack/epiriumdocs',
  footer: {
    text: 'Epirium © MIT 2023',
  },
}

export default config
