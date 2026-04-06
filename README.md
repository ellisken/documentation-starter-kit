# Documentation Starter Kit

A documentation site built with [Nextra](https://nextra.site) and deployed on [Vercel](https://vercel.com).

[**Live Site →**](https://documentation-starter-kit-mauve-three.vercel.app/)

## Features

- MDX support — write Markdown with embedded React components
- Automatic sidebar navigation via `_meta.json` files
- Full-text search
- Syntax highlighting with line numbers, copy button, and filename labels
- Light/dark mode
- Responsive layout

## Project Structure

```
├── pages/                 # Documentation pages (.mdx)
│   ├── _meta.json         # Root sidebar config
│   ├── index.mdx          # Home page
│   ├── getting-started/   # Getting started guides
│   ├── guides/            # Usage guides
│   └── advanced/          # Advanced topics
├── components/            # React components
├── theme.config.tsx       # Nextra theme configuration
├── next.config.js         # Next.js configuration
└── package.json
```

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
pnpm build
pnpm start
```

## License

This project is licensed under the MIT License.
