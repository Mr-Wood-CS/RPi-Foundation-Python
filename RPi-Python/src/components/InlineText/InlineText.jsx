import './InlineText.css'
export default function InlineText({ text }) {
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return tokens.map((token, index) => {
    if (token.startsWith('`')) return <code className="inline-code" key={index}>{token.slice(1, -1)}</code>
    if (token.startsWith('**')) return <strong key={index}>{token.slice(2, -2)}</strong>
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>
    return token
  })
}
