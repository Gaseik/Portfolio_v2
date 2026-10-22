const Arrow = () => (
  <span className="c-go" aria-hidden="true">
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8h11M9 4l4 4-4 4" /></svg>
  </span>
)

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="sec-head" data-reveal><span>Get in touch</span></h2>
      <div data-reveal>
        <a className="c-row" href="mailto:james800822@hotmail.com">james800822@hotmail.com</a>
        <a className="c-row" href="https://github.com/Gaseik" target="_blank" rel="noopener">github.com/Gaseik</a>
        <a className="c-row" href="https://www.linkedin.com/in/weichieh-cheng-fe" target="_blank" rel="noopener">LinkedIn</a>
        <div className="c-row">London · remote</div>
        <a className="c-row c-say" href="mailto:james800822@hotmail.com?subject=Hello%20James">Say hello <Arrow /></a>
      </div>
    </section>
  )
}
