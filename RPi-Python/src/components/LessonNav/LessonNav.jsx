import './LessonNav.css'
export default function LessonNav({ steps, active, completed, onSelect }) {
  const count = steps.slice(0, 5).filter(step => completed.includes(step.id)).length
  return <aside className="lesson-nav"><p className="lesson-nav__eyebrow">YOUR FIELD GUIDE</p>
    <nav aria-label="Lesson steps"><ol>{steps.map((step, index) => <li key={step.id}>
      <button aria-current={active === index ? 'step' : undefined} onClick={() => onSelect(index)}>
        <span className="lesson-nav__number" aria-hidden="true">{completed.includes(step.id) ? '✓' : index === 5 ? '✧' : String(index + 1).padStart(2, '0')}</span>
        <span>{step.title}{completed.includes(step.id) && <span className="sr-only">, completed</span>}</span>
      </button></li>)}</ol></nav>
    <div className="lesson-nav__progress"><div><span>Your progress</span><strong>{count} / 5</strong></div><progress value={count} max="5" aria-label={`${count} of 5 steps completed`} /></div>
  </aside>
}
