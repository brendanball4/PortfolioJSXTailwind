import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiSun, FiMoon } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { discordUsername, emailAddress, linkedin, github } from '../constants/constants';
import { copyWithToast } from './Toast';

const RESUME = 'https://drive.google.com/file/d/1LvC5RbO9rfrQnz6W2pFlmUzZ6yAtMwHY/view?usp=sharing';

const Navbar = ({ theme, onToggleTheme }) => {
  const icon = "w-9 h-9 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors";

  return (
    <div className="fixed z-20 top-4 right-4 sm:right-8 flex items-center bg-paper dark:bg-ink border border-stone-200 dark:border-stone-800 shadow-md">
      <button type="button" onClick={() => copyWithToast(discordUsername, 'Discord username copied')} title="Discord" className={icon}>
        <FaDiscord className="w-4 h-4" />
      </button>
      <a href={`mailto:${emailAddress}`} title="Email" className={icon}>
        <FiMail className="w-4 h-4" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className={icon}>
        <FiLinkedin className="w-4 h-4" />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" className={icon}>
        <FiGithub className="w-4 h-4" />
      </a>
      <a
        href={RESUME}
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 px-3.5 inline-flex items-center gap-1.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 transition-colors"
      >
        Resume
        <FiArrowUpRight className="w-4 h-4" />
      </a>
      <button type="button" onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle theme" className={icon + " border-l border-stone-200 dark:border-stone-800"}>
        {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default Navbar;
