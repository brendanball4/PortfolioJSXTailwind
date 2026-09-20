import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { discordUsername, emailAddress, linkedin, github } from '../constants/constants';
import { copyWithToast } from './Toast';

function Footer() {
    const icon = "p-2 text-white hover:text-accent-400 transition-colors";

    return (
        <footer className="bg-stone-900 dark:bg-black text-white py-10 mt-10">
            <div className="flex justify-center gap-4 mb-6">
                <button type="button" onClick={() => copyWithToast(discordUsername, 'Discord username copied')} title="Discord" className={icon}>
                    <FaDiscord className="w-5 h-5" />
                </button>
                <a href={`mailto:${emailAddress}`} title="Email" className={icon}>
                    <FiMail className="w-5 h-5" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className={icon}>
                    <FiLinkedin className="w-5 h-5" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" className={icon}>
                    <FiGithub className="w-5 h-5" />
                </a>
            </div>
            <p className="text-center text-sm text-stone-400">
                &copy; {new Date().getFullYear()} Brendan Ball. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
