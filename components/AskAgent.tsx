import { useRouter } from 'next/router'

const SITE_URL = 'https://documentation-starter-kit-mauve-three.vercel.app'

function ClaudeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.709 15.955l4.066-2.328a.48.48 0 0 1 .48.002l3.836 2.28a.48.48 0 0 1 .236.413v4.553a.48.48 0 0 1-.243.417l-4.066 2.292a.48.48 0 0 1-.47.002L4.71 21.32a.48.48 0 0 1-.246-.42v-4.518a.48.48 0 0 1 .245-.418z" />
      <path d="M14.707 15.955l4.066-2.328a.48.48 0 0 1 .48.002l.036.021a.48.48 0 0 1 .247.42v4.553c0 .17-.091.328-.238.413l-4.071 2.296a.48.48 0 0 1-.475-.002l-3.836-2.268a.48.48 0 0 1-.241-.417v-4.518a.48.48 0 0 1 .245-.418z" opacity=".5" />
      <path d="M9.708 7.588l4.066-2.329a.48.48 0 0 1 .48.002l3.836 2.28a.48.48 0 0 1 .236.414v4.553a.48.48 0 0 1-.243.417l-4.066 2.292a.48.48 0 0 1-.47.002l-3.836-2.268a.48.48 0 0 1-.246-.42V8.013a.48.48 0 0 1 .245-.418z" opacity=".7" />
    </svg>
  )
}

function ChatGPTIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const linkClass =
  'nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 nx-flex nx-items-center nx-gap-1.5 nx-no-underline'

export default function AskAgent() {
  const router = useRouter()
  const pagePath = router.asPath.split('#')[0].split('?')[0]
  const pageUrl = `${SITE_URL}${pagePath}`
  const prompt = `Read the documentation page at ${pageUrl} and answer my question about it.`

  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`
  const chatgptUrl = `https://chatgpt.com/?hint=search&q=${encodeURIComponent(prompt)}`

  return (
    <div className="nx-flex nx-flex-col nx-gap-2">
      <span className="nx-text-xs nx-font-semibold nx-text-gray-500 dark:nx-text-gray-400">
        Ask an AI
      </span>
      <a
        href={claudeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <ClaudeIcon />
        Ask Claude
        <ExternalLinkIcon />
      </a>
      <a
        href={chatgptUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <ChatGPTIcon />
        Ask ChatGPT
        <ExternalLinkIcon />
      </a>
    </div>
  )
}
