function App() {
  return (
    <main className="page">
      <nav className="navigation" aria-label="Main navigation">
        <a className="wordmark" href="#home">
          Your Name
        </a>
        <a className="navigation-link" href="mailto:hello@example.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="home" aria-labelledby="intro-title">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Available for new opportunities
        </p>
        <h1 id="intro-title">
          Thoughtful work,
          <br />
          made with <span>purpose.</span>
        </h1>
        <p className="intro">
          Hi, I&apos;m Your Name — a designer and developer creating clear,
          considered digital experiences.
        </p>
        <a className="primary-link" href="mailto:hello@example.com">
          Let&apos;s work together <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="footer">
        <span>Independent designer &amp; developer</span>
        <span>© {new Date().getFullYear()} Your Name</span>
      </footer>
    </main>
  );
}

export default App;
