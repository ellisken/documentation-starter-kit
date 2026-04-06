import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'
import { remove } from 'unist-util-remove'

const PAGES_DIR = 'pages'
const OUTPUT_DIR = join('public', 'md')

async function findMdxFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir.toString(), entry.name)
    if (entry.isDirectory()) {
      files.push(...await findMdxFiles(fullPath))
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }
  return files
}

function stripMdx() {
  return (tree) => {
    remove(tree, (node) => {
      return (
        node.type === 'mdxjsEsm' ||
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement' ||
        node.type === 'mdxFlowExpression' ||
        node.type === 'mdxTextExpression'
      )
    })
  }
}

const processor = remark()
  .use(remarkMdx)
  .use(stripMdx)
  .use(remarkStringify)

async function main() {
  const files = await findMdxFiles(PAGES_DIR)
  let count = 0

  for (const file of files) {
    const source = await readFile(file, 'utf-8')
    const result = await processor.process(source)
    const relPath = relative(PAGES_DIR, file).replace(/\.mdx$/, '.md')
    const outPath = join(OUTPUT_DIR, relPath)

    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, String(result))
    count++
  }

  console.log(`Generated ${count} .md files in ${OUTPUT_DIR}`)
}

main().catch((err) => {
  console.error('Failed to generate .md files:', err)
  process.exit(1)
})
