import './index.css'
import { PanelsTopLeft, Zap, Globe  } from 'lucide-react'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
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
        <Globe  style={{ width: '35px', height: 'auto', color: 'black' }} />
        Contact
      </h1>
      <Contact />
    </>
    
  )
}

export default App
