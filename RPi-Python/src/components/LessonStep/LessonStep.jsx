import LessonContent from '../LessonContent/LessonContent'
import './LessonStep.css'
export default function LessonStep({ step, index, complete, onComplete, onNext }) {
  return <article className="lesson-step" aria-labelledby="step-heading">
    <p className="lesson-step__eyebrow">STEP {String(index + 1).padStart(2, '0')} / 05</p>
    <h2 id="step-heading" tabIndex="-1">{step.title}</h2>
    <LessonContent blocks={step.blocks} />
    <div className="lesson-step__actions"><label><input type="checkbox" checked={complete} onChange={onComplete} /><span>{complete ? 'Step complete' : 'Mark step complete'}</span></label><button onClick={onNext}>{index === 4 ? 'Try the challenge' : 'Next step'} <span aria-hidden="true">→</span></button></div>
  </article>
}
