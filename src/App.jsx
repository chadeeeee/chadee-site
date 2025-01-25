import './index.css'
import { PanelsTopLeft, Zap, Globe } from 'lucide-react'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import makeBurst from './sparks.js'

function App() {
  const handleClick = (e) => {
    const center = { x: e.pageX, y: e.pageY }
    makeBurst(center)
  }

  return (
    <div onClick={handleClick} style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <About />
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          fontSize: '40px',
        }}
      >
        <PanelsTopLeft style={{ width: '35px', height: 'auto', color: 'black' }} /> My Projects
      </h1>
      <Projects />

      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          fontSize: '40px',
        }}
      >
        <Zap style={{ width: '35px', height: 'auto', color: 'black' }} />
        Skills
      </h1>
      <Skills />

      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          fontSize: '40px',
        }}
      >
        <Globe style={{ width: '35px', height: 'auto', color: 'black' }} />
        Contact
      </h1>
      <Contact />

      <a
        href="https://github.com/chadeeeee/chadee-site"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          marginBottom: '-20px',
        }}
      >
        Source code
      </a>
    </div>
  )
}

export default App