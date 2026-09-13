import { useEffect } from 'react'
import profileImage from './assets/profile.jpg'
import './App.css'

function App() {

  useEffect(() => {

    const sections = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          Agam<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-title">
            HELLO, I'M
          </p>

          <h1>
            Agam <span>Tiwari</span>
          </h1>

          <h2>
            Web Developer & Designer
          </h2>

          <p className="hero-text">
            I create modern, responsive and user-friendly websites
            with clean design and powerful technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

        </div>


        {/* Profile Image */}
        <div className="hero-visual">

  <div className="orbit orbit-1"></div>
  <div className="orbit orbit-2"></div>

  <div className="hero-card">

    <div className="card-glow"></div>

    <img
      src={profileImage}
      alt="Agam Tiwari"
      className="profile-image"
    />

    <div className="floating-tech tech-1">
      React
    </div>

    <div className="floating-tech tech-2">
      Python
    </div>

    <div className="floating-tech tech-3">
      IoT
    </div>

  </div>

</div>

      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="section reveal">

        <p className="section-subtitle">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Who I Am
        </h2>

        <div className="about-content">

          <div className="about-text">

            <p>
              Hi, I'm <strong>Agam Tiwari</strong>, a passionate Web
              Developer and Designer who loves creating modern,
              responsive and user-friendly websites.
            </p>

            <p>
              I enjoy turning ideas into beautiful digital experiences
              using modern web technologies. My goal is to build
              websites that are fast, clean, attractive and easy to use.
            </p>

            <div className="about-stats">

              <div>
                <h3>10+</h3>
                <span>Projects</span>
              </div>

              <div>
                <h3>5+</h3>
                <span>Technologies</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Dedication</span>
              </div>

            </div>

          </div>

        </div>

      </section>


     {/* ================= SKILLS SECTION ================= */}
<section id="skills" className="section reveal">

  <p className="section-subtitle">
    MY SKILLS
  </p>

  <h2 className="section-title">
    What I Do
  </h2>

  <div className="skills-grid">

    {/* HTML */}
    <div className="skill-card">
      <div className="skill-icon">🌐</div>
      <h3>HTML</h3>
      <p>Semantic and structured web pages</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '90%' }}></div>
      </div>

      <span className="skill-percent">90%</span>
    </div>


    {/* CSS */}
    <div className="skill-card">
      <div className="skill-icon">🎨</div>
      <h3>CSS</h3>
      <p>Responsive and modern web designs</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '85%' }}></div>
      </div>

      <span className="skill-percent">85%</span>
    </div>


    {/* JavaScript */}
    <div className="skill-card">
      <div className="skill-icon">⚡</div>
      <h3>JavaScript</h3>
      <p>Interactive and dynamic websites</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '80%' }}></div>
      </div>

      <span className="skill-percent">80%</span>
    </div>


    {/* React */}
    <div className="skill-card">
      <div className="skill-icon">⚛️</div>
      <h3>React</h3>
      <p>Modern component-based applications</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '75%' }}></div>
      </div>

      <span className="skill-percent">75%</span>
    </div>


    {/* TypeScript */}
    <div className="skill-card">
      <div className="skill-icon">📘</div>
      <h3>TypeScript</h3>
      <p>Type-safe and scalable applications</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '70%' }}></div>
      </div>

      <span className="skill-percent">70%</span>
    </div>


    {/* Responsive Design */}
    <div className="skill-card">
      <div className="skill-icon">🖥️</div>
      <h3>Responsive Design</h3>
      <p>Mobile, tablet and desktop friendly UI</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '90%' }}></div>
      </div>

      <span className="skill-percent">90%</span>
    </div>


    {/* Python */}
    <div className="skill-card">
      <div className="skill-icon">🐍</div>
      <h3>Python</h3>
      <p>Programming, automation and AI development</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '90%' }}></div>
      </div>

      <span className="skill-percent">90%</span>
    </div>


    {/* Node.js */}
    <div className="skill-card">
      <div className="skill-icon">🟢</div>
      <h3>Node.js</h3>
      <p>Backend and server-side development</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '85%' }}></div>
      </div>

      <span className="skill-percent">85%</span>
    </div>


    {/* AWS */}
    <div className="skill-card">
      <div className="skill-icon">☁️</div>
      <h3>AWS</h3>
      <p>Cloud computing and deployment</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '70%' }}></div>
      </div>

      <span className="skill-percent">70%</span>
    </div>


    {/* Prompting */}
    <div className="skill-card">
      <div className="skill-icon">🤖</div>
      <h3>Prompting</h3>
      <p>AI prompting and generative AI workflows</p>

      <div className="skill-bar">
        <div className="skill-progress" style={{ width: '90%' }}></div>
      </div>

      <span className="skill-percent">90%</span>
    </div>

  </div>

</section>


      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="section reveal">

        <p className="section-subtitle">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured Projects
        </h2>


        <div className="projects-grid">


          {/* PROJECT 01 */}
          <div className="project-card">
            <img
  src="/homefood1.jpg"
  alt="HomeFood Project"
  className="project-image"
/>

            <div className="project-number">
              01
            </div>

            <h3>
              HomeFood
            </h3>

            <p>
              A professional home-cooked food delivery Android
              application where customers can order homemade food,
              food providers can manage orders and delivery partners
              can accept delivery tasks.
            </p>

            <div className="project-tech">
              <span>Android</span>
              <span>Java</span>
              <span>XML</span>
              <span>Firebase</span>
            </div>

            <button>
              View Project
            </button>

          </div>


          {/* PROJECT 02 */}
          <div className="project-card">
           <img
  src="/voice.jpg"
  alt="Voice Assistant Project"
  className="project-image"
/>

            <div className="project-number">
              02
            </div>

            <h3>
              Voice Assistant
            </h3>

            <p>
              A Python-based desktop voice assistant that can listen
              to voice commands and perform different system tasks
              such as opening websites, controlling volume and
              interacting with the computer.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>AI</span>
              <span>Voice</span>
              <span>Automation</span>
            </div>

           <a
  href="https://github.com/Agampro02/voice-controlled-AI-agent"
  target="_blank"
  rel="noopener noreferrer"
  className="project-button"
>
  View Project
</a>

          </div>


          {/* PROJECT 03 */}
          <div className="project-card">
           <img
  src="/portfolio1.jpg"
  alt="Portfolio Website"
  className="project-image"
/>

            <div className="project-number">
              03
            </div>

            <h3>
              Portfolio Website
            </h3>

            <p>
              A modern personal portfolio website designed to
              showcase my skills, projects, experience and
              professional profile using a clean and responsive UI.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <button>
              View Project
            </button>

          </div>


          {/* PROJECT 04 */}
          <div className="project-card">
            <img
  src="/gesturecar.jpg"
  alt="Gesture Control Car"
  className="project-image"
/>

            <div className="project-number">
              04
            </div>

            <h3>
              Gesture Control Car
            </h3>

            <p>
              A wireless robotic car controlled through hand gestures.
              The project combines sensors, microcontrollers and
              wireless communication to control the car's movement.
            </p>

            <div className="project-tech">
              <span>Arduino</span>
              <span>IoT</span>
              <span>Sensors</span>
              <span>Embedded C</span>
            </div>

           <a
  href="https://github.com/Agampro02/gesture-control-car"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
</a>
          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
<section id="contact" className="section contact reveal">

  <p className="section-subtitle">
    GET IN TOUCH
  </p>

  <h2 className="section-title">
    Contact Me
  </h2>

  <p>
    Have a project or idea? Let's work together.
  </p>

  <div className="contact-buttons">

    {/* Email */}
    <a
      href="mailto:agamt7375@gmail.com"
      className="btn primary"
    >
      📧 Send Email
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Agampro02"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      💻 GitHub
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/agam-tiwari-a08900380/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      🔗 LinkedIn
    </a>

  </div>

</section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Agam Tiwari. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default App