import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import CopyAsMarkdown from './components/CopyAsMarkdown'
import AskAgent from './components/AskAgent'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.1em' }}>
      Documentation Starter Kit
    </span>
  ),
  project: {
    link: 'https://github.com/ellisken/documentation-starter-kit',
  },
  docsRepositoryBase: 'https://github.com/ellisken/documentation-starter-kit/tree/main',
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    extraContent: (
      <>
        <CopyAsMarkdown />
        <AskAgent />
      </>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentation Starter Kit - Built with Nextra" />
      <meta name="og:title" content="Documentation Starter Kit" />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Documentation Starter Kit. Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>.
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs Starter Kit',
    }
  },
}

export default config
