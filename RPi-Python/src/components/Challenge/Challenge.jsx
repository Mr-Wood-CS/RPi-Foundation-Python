import LessonContent from '../LessonContent/LessonContent'
import './Challenge.css'
export default function Challenge({ step, complete, onComplete }) {
  return <article className="challenge" aria-labelledby="step-heading"><p className="challenge__eyebrow">MAKE IT YOUR OWN</p><h2 id="step-heading" tabIndex="-1">A different way out.</h2><p className="challenge__intro">Your house. Your monsters. Your rules.</p><LessonContent blocks={step.blocks} /><label className="challenge__complete"><input type="checkbox" checked={complete} onChange={onComplete} /><span>{complete ? 'Challenge complete' : 'Mark challenge complete'}</span></label></article>
}
