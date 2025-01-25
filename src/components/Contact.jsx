import '../App.scss';
import GmailIcon from '../assets/icons/gmail.webp';
import DiscordIcon from '../assets/icons/discord.svg';
import TelegramIcon from '../assets/icons/telegram.svg';

const Contact = () => {
  const socials = [
    {
      platform: 'Gmail',
      url: 'mailto:esurginet2011@gmail.com',
      icon: GmailIcon
    },
    {
      platform: 'Discord',
      url: 'https://discord.com/users/956950253964247120',
      icon: DiscordIcon
    },
    {
      platform: 'Telegram',
      url: 'https://t.me/chadeeeeeeee',
      icon: TelegramIcon
    }
  ];

  return (
    <div className="contacts" aria-labelledby="socials">
      {socials.map(({ platform, url, icon }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={platform}
        >
          <div className="social">
            <div className="social-icon">
              <img 
                src={icon} 
                alt={platform} 
                className="social-image" 
                width="50"
                height="50"
              />
            </div>
            <span>{platform}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Contact;