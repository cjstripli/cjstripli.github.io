import type { CSSProperties } from 'react'
import { projects } from './data/projects'
import './App.css'

const NAME = 'Carolyn Stripling'
const GITHUB = 'https://github.com/cjstripli'
const EMAIL = 'hello@example.com'

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="nav-brand" href="#top">
          {NAME}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-name">
          <p className="hero-kicker">Portfolio</p>
          <h1 id="hero-name" className="hero-name">
            {NAME}
          </h1>
          <p className="hero-lede">
            Building thoughtful software with clarity, craft, and restraint.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              View work
            </a>
            <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="hero-rule" aria-hidden="true" />
        </section>

        <section id="work" className="section" aria-labelledby="work-heading">
          <div className="section-head">
            <h2 id="work-heading">Selected work</h2>
            <p>A few projects I am glad to share.</p>
          </div>

          <ul className="project-list">
            {projects.map((project, index) => (
              <li
                key={project.title}
                className="project"
                style={{ '--i': index } as CSSProperties}
              >
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-tags">
                    {project.tags.join(' · ')}
                  </span>
                </div>
                <div className="project-body">
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  {project.repo ? (
                    <a
                      className="project-link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repository
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section about" aria-labelledby="about-heading">
          <div className="section-head">
            <h2 id="about-heading">About</h2>
            <p>
              I care about interfaces that feel calm and code that stays
              readable. This space collects the work I want to show—update the
              copy here when you are ready.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-heading">
          <div className="section-head">
            <h2 id="contact-heading">Contact</h2>
            <p>Say hello—I am open to new conversations.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              github.com/cjstripli
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {NAME}</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
