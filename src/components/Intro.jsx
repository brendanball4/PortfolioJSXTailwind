import React from 'react';
import me from '../PortfolioImages/me.jpg'
import TypewriterEffect from './Typewrite';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { emailAddress } from '../constants/constants';

function Intro() {
    return (
        <div className="pt-10 pb-4 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text */}
            <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3">
                    Full Stack Developer
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-white mb-2">
                    Hi, I'm <span className="text-violet-500 dark:text-violet-400">Brendan Ball</span>
                </h1>
                <div className="text-xl md:text-2xl mb-4 text-stone-700 dark:text-stone-300">
                    I am a <TypewriterEffect />
                </div>
                <p className="text-base md:text-lg max-w-xl mx-auto md:mx-0 text-stone-600 dark:text-stone-400 mb-3">
                    I like building things end to end: frontend, backend, database, all of it.
                    These days I work in modern PHP and Laravel, with C# and the JavaScript
                    world (React, Svelte, Vue) close behind. You can see plenty of it right below.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                    <a
                        href="#more-projects"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                    >
                        See my work
                        <FiArrowDown className="w-4 h-4" />
                    </a>
                    <a
                        href={`mailto:${emailAddress}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 dark:hover:border-violet-400 transition-colors"
                    >
                        <FiMail className="w-4 h-4" />
                        Get in touch
                    </a>
                </div>
            </div>

            {/* Photo */}
            <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
                <div className="relative w-56 h-64 md:w-full md:max-w-xs md:h-80">
                    <img
                        src={me}
                        alt="Me with my dog"
                        className="w-full h-full object-cover rounded-[2rem] border border-stone-200 dark:border-stone-700 shadow-lg md:hover:scale-[1.03] transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro;
