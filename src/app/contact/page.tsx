export default function Page() {
  return (
    <div className="page-shell w-full max-w-6xl">
      <section className="content-panel">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Open to analytics leadership roles, consulting, and data projects.</p>
        </div>
        <div className="contact-grid">
          <article className="contact-card">
            <p className="contact-label">Primary</p>
            <h3>Email</h3>
            <p className="contact-copy">
              Best way to reach me. I usually respond within one business day.
            </p>
            <a href="mailto:MarlonMerjos@gmail.com" className="btn-primary">
              MarlonMerjos@gmail.com
            </a>
          </article>

          <article className="contact-card">
            <p className="contact-label">Professional Profiles</p>
            <h3>LinkedIn and GitHub</h3>
            <p className="contact-copy">
              For work history, projects, and code samples.
            </p>
            <div className="contact-actions">
              <a
                href="https://linkedin.com/in/marlonmerjos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/marmer7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
