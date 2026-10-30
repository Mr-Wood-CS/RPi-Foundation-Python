import './Hero.css'
export default function Hero({ onStart }) {
  return <section className="hero" id="top" aria-labelledby="page-title">
    <div className="hero__copy">
      <p className="hero__eyebrow">PYTHON PROJECT / TEXT ADVENTURE</p>
      <h1 id="page-title">Escape<br />the maze<span>.</span></h1>
      <p className="hero__description">Design and code your own maze escape text-based game.</p>
      <div className="hero__actions"><button onClick={onStart}>Explore the lesson <span aria-hidden="true">↗</span></button><span>5 steps + a challenge</span></div>
    </div>
    <div className="hero__visual"><img src="./lesson-assets/page-1-1.png" alt="A yellow character finding a way through a green maze" width="1000" height="525" /><span className="hero__caption">Build a world. Find your way out.</span></div>
  </section>
}
