import '../App.scss';
import location from '../assets/icons/location.svg'
import uaFlag from '../assets/emojis/ua-flag.webp';
import githubLogo from '../assets/icons/github.svg';
import helloImg from '../assets/emojis/hello.webp';
import bubblesImg from '../assets/images/bubbles.webp';
import avatarIcon from '../assets/images/avatar.webp';
import JS from '../assets/emojis/js.webp'
import reactIcon from '../assets/emojis/react.webp'

function About() {
  return (
    <>
      <img className="bubbles" src={bubblesImg} alt="Bubbles" />
      <div className="profile-card">
        <div className="info">
          <h1 className="name">Chadee</h1>
          <div className="meta-info">
            <span className="meta-item">
            <img className="emoji" style={{ width: '18px' }} src={location} alt="Location" />
              <img className="emoji" style={{ width: '18px', marginRight: '2px'}} src={uaFlag} alt="UA" />
              <span style={{ color: 'black' }}>Ukraine</span>
            </span>
            <span className="meta-item">
              <img className="icon" src={githubLogo} alt="GitHub" />
              <a href="https://github.com/chadeeeee" target="_blank" rel="noopener noreferrer">
                <span>chadeeeee</span>
              </a>
            </span>
          </div>
          <div className="description">
            <p>
              Hello <img className="emoji" src={helloImg} alt="Waving Hand" />, my name is <b>Dmytro</b> and I am a developer. I write mainly in <b>Python</b>.
            </p>
            <p>I also have experience with <b>SQL</b> and understand how to work with databases.</p>
            <p>
              If I have free time I'm cycling, you can also check my{' '}
              <a href="https://www.strava.com/athletes/51513606" target="_blank" rel="noopener noreferrer">
                <b style={{ color: '#f08b1f', textDecoration: 'underline'}}>Strava</b>
              </a>
            </p>
            <p>
              I'm currently learning <img style={{ marginRight: '2px', width: '15px', height: 'auto'}} src={JS} alt="js" /> JavaScript and React.
            </p>
          </div>
        </div>
        <div className="avatar">
          <img src={avatarIcon} alt="Avatar" />
        </div>
      </div>
    </>
  );
}

export default About;
