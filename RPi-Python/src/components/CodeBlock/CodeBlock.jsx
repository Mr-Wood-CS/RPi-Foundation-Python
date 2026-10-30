import { useRef, useState } from 'react'
import './CodeBlock.css'
export default function CodeBlock({ text, language }) {
  const [status, setStatus] = useState('')
  const codeRef = useRef(null)
  async function copyCode() {
    try { await navigator.clipboard.writeText(text); setStatus('Copied to clipboard') }
    catch {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(codeRef.current)
      selection.removeAllRanges()
      selection.addRange(range)
      setStatus('Code selected. Press Ctrl+C, or Command+C on Mac, to copy.')
    }
  }
  return <div className="code-block"><div className="code-block__bar"><span>{language === 'python' ? 'Python' : 'Terminal output'}</span><button type="button" onClick={copyCode} aria-label={`Copy ${language === 'python' ? 'Python code' : 'terminal output'}`}>Copy</button></div>
    <pre tabIndex="0" aria-label={language === 'python' ? 'Python code example' : 'Example terminal output'}><code ref={codeRef}>{text}</code></pre>
    <p className="code-block__status" role="status">{status}</p>
  </div>
}
