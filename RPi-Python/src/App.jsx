import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LessonNav from './components/LessonNav/LessonNav'
import LessonStep from './components/LessonStep/LessonStep'
import Challenge from './components/Challenge/Challenge'
import Footer from './components/Footer/Footer'
import lesson from './data/lesson.json'
import './App.css'

const storageKey = 'escape-the-maze-completed-v1'
function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]')
    return Array.isArray(saved) ? saved.filter(id => lesson.some(step => step.id === id)) : []
  } catch { return [] }
}

export default function App() {
  const [active, setActive] = useState(0)
  const [completed, setCompleted] = useState(readProgress)
  const [storageNotice, setStorageNotice] = useState('')
  function selectStep(index) {
    setActive(index)
    requestAnimationFrame(() => {
      const heading = document.getElementById('step-heading')
      heading?.focus({ preventScroll: true })
      document.getElementById('lesson')?.scrollIntoView({ block: 'start' })
    })
  }
  function toggleComplete() {
    const id = lesson[active].id
    const next = completed.includes(id) ? completed.filter(item => item !== id) : [...completed, id]
    setCompleted(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) }
    catch { setStorageNotice('Progress is available for this visit. This browser could not save it.') }
  }
  return (
    <>
      <a className="skip-link" href="#lesson">Skip to lesson</a>
      <Header />
      <main className="page-shell">
        <Hero onStart={() => selectStep(active)} />
        <div className="lesson-layout" id="lesson">
          <LessonNav steps={lesson} active={active} completed={completed} onSelect={selectStep} />
          <div className="lesson-main">
            {active === 5
              ? <Challenge step={lesson[active]} complete={completed.includes(lesson[active].id)} onComplete={toggleComplete} />
              : <LessonStep key={lesson[active].id} step={lesson[active]} index={active} complete={completed.includes(lesson[active].id)} onComplete={toggleComplete} onNext={() => selectStep(active + 1)} />}
            <p className="storage-notice" role="status">{storageNotice}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
