
import "./App.css";

const skills = [
  "PHP",
  "Laravel",
  "React",
  "JavaScript",
  "MySQL",
  "Python",
];

const projects = [
  {
    title: "Job Board Platform",
    description:
      "A job board web application built to help users explore job opportunities and manage applications.",
    tech: ["Laravel", "PHP", "MySQL"],
    status: "Featured Project",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          MB<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-cta"
          href="https://github.com/MouhamadBakirhk"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub ↗
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              COMPUTER SCIENCE · DEVELOPER PORTFOLIO
            </p>

            <h1>
              Hi, I'm <span>Mouhamad Bakir.</span>
            </h1>

            <h2>Computer Science Student &amp; Aspiring Software Developer</h2>

            <p className="hero-description">
              I build web applications and enjoy turning ideas into practical
              software using modern technologies. I'm continuously learning
              and improving my development skills.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="btn secondary" href="#contact">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/MouhamadBakirhk"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-baqer-al-harakeh-8a9a38298/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span className="window-dot purple" />
              <span className="window-dot pink" />
              <span className="window-dot blue" />
              <span className="card-label">developer.js</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="code-indent">
                name: <span className="code-green">"Mouhamad Bakir"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-green">"Software Developer"</span>,
              </p>
              <p className="code-indent">
                learning: <span className="code-green">"Every day"</span>,
              </p>
              <p className="code-indent">
                passion: <span className="code-green">"Building things"</span>
              </p>
              <p>{"};"}</p>
              <p className="code-comment">// Always learning. Always building.</p>
            </div>

            <div className="tech-badges">
              <span>PHP</span>
              <span>Laravel</span>
              <span>React</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="hero-glow" />
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-card">
            <div className="about-mark">MB<span>.</span></div>
            <div>
              <h3>Learning, building, and growing.</h3>
              <p>
                I'm a Computer Science student and aspiring software developer
                interested in web development and software engineering. I work
                with technologies such as PHP, Laravel, React, JavaScript,
                MySQL, and Python. My goal is to keep developing real projects,
                strengthen my skills, and create useful digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span>Skills</span></h2>
            <p className="section-description">
              Technologies I'm learning and using in my development projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-icon">✦</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SOME THINGS I'VE BUILT</p>
            <h2>Featured <span>Project</span></h2>
            <p className="section-description">
              A look at one of my web development projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span className="project-symbol">{"</>"}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <div className="project-visual-title">
                    <span>JOB</span>
                    <span className="accent-text">BOARD.</span>
                  </div>
                  <div className="project-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href="https://github.com/MouhamadBakirhk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Profile <span>↗</span>
                  </a>
                  <p className="project-note">
                    Replace this link with the direct repository URL when your
                    Job Board project is published on GitHub.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have a project in <span>mind?</span></h2>
            <p>
              I'm interested in learning, collaborating, and exploring new
              opportunities. Feel free to reach out.
            </p>

            <div className="contact-actions">
              <a
                className="btn primary"
                href="mailto:mouhamadbakir513@gmail.com"
              >
                Email Me ↗
              </a>
              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/mohammad-baqer-al-harakeh-8a9a38298/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>

            <p className="contact-email">mouhamadbakir513@gmail.com</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          MB<span>.</span>
        </a>
        <p>Designed &amp; built by Mouhamad Bakir.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
