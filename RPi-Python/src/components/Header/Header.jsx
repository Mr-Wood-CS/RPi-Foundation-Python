import './Header.css'
export default function Header() {
  return <header className="site-header"><div className="site-header__inner">
    <a className="site-header__brand" href="#top" aria-label="Python, top of lesson">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M3 3h24v24H3V11h8v8h8V11H3M19 3v8M11 19v8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>
      Python
    </a>
    <span className="site-header__label">A little code. A new adventure.</span>
  </div></header>
}
