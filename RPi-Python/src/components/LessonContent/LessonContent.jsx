import InlineText from '../InlineText/InlineText'
import CodeBlock from '../CodeBlock/CodeBlock'
import './LessonContent.css'
export default function LessonContent({ blocks }) {
  return <div className="lesson-content">{blocks.map((block, index) => {
    if (block.type === 'code') return <CodeBlock key={index} {...block} />
    if (block.type === 'heading') return <h3 key={index}>{block.text}</h3>
    if (block.type === 'image') return <figure key={index}><img src={block.src} alt={block.alt} loading="lazy" /><figcaption>{block.alt}</figcaption></figure>
    if (block.type === 'list') return <ul key={index}>{block.items.map((item, i) => <li key={i}><InlineText text={item} /></li>)}</ul>
    return <p key={index}><InlineText text={block.text} /></p>
  })}</div>
}
