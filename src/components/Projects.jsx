import '../App.scss'
import Repo from '../assets/icons/repo.svg'
import Open from '../assets/icons/open.svg'

const projects = [
  {
    name: 'chadee-userbot',
    repoLink: 'https://github.com/chadeeeee/chadee-userbot',
    description: '🤖 Simple userbot which makes Telegram using easier and more interesting!',
  },
  {
    name: 'reminder-bot',
    repoLink: 'https://github.com/chadeeeee/ReminderBot',
    description: "🔔 Telegram bot which helps you don't forget for your plans!",
  },
  {
    name: 'rombi',
    repoLink: 'https://github.com/chadeeeee/Rombi',
    description: '👮‍♂️ Simple Telegram bot moderator which helps you to ban and mute people',
  },
  {
    name: 'master-clicker',
    repoLink: 'https://github.com/chadeeeee/MasterClicker',
    description: '⚡️ Autoclicker for Windows that clicks many times without your help!',
  },
]

function Projects() {
  return (
    <>
      <p>List of my best projects</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-tab" key={index}>
            <div className="project-header">
              <div className="repo">
                <img className="icon" src={Repo} alt="Repo" />
                <span className="name">{project.name}</span>
              </div>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <img src={Open} alt="Open" />
              </a>
            </div>
            <div className="description">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
