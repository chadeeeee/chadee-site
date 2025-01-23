import '../App.scss'
import { Code, Palette } from 'lucide-react'

const skills = {
  programming: [
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'SQLite', icon: 'https://skillicons.dev/icons?i=sqlite' },
  ],
  tools: [
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'Sublime Text', icon: 'https://skillicons.dev/icons?i=sublime' },
    { name: 'PyCharm', icon: 'https://skillicons.dev/icons?i=pycharm' },
  ],
}

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-sections">
        <div className="skills-section">
          <h2>
            <Code /> Programming Languages
          </h2>
          <div className="skills-grid">
            {skills.programming.map((skill) => (
              <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>
            <Palette /> Tools
          </h2>
          <div className="skills-grid">
            {skills.tools.map((skill) => (
              <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
