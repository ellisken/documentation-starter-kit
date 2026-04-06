import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'

export default function CopyAsMarkdown() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const pagePath = router.asPath.split('#')[0].split('?')[0]
    const mdPath = pagePath === '/' ? '/index' : pagePath
    const mdUrl = `/md${mdPath}.md`

    try {
      const res = await fetch(mdUrl)
      let text: string

      if (res.ok) {
        text = await res.text()
      } else {
        const article = document.querySelector('article')
        text = article?.innerText ?? ''
      }

      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy markdown:', err)
    }
  }, [router.asPath])

  return (
    <button
      onClick={handleCopy}
      className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 nx-flex nx-items-center nx-gap-1"
      title="Copy page as Markdown"
    >
      {copied ? (
        <>
          <CheckIcon />
          Copied!
        </>
      ) : (
        <>
          <CopyIcon />
          Copy page as Markdown
        </>
      )}
    </button>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
