import React from 'react';
import me from '../PortfolioImages/me.jpg'
import { emailAddress } from '../constants/constants';

function Intro() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
            <div className="md:col-span-3">
                <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 dark:text-white mb-6">
                    Hi, I'm <span className="text-accent-500">Brendan</span>
                </h1>
                <p className="text-lg md:text-xl max-w-xl text-stone-700 dark:text-stone-300 mb-3">
                    Full stack developer. I like building things end to end: frontend, backend, database, all of it.
                </p>
                <p className="text-base md:text-lg max-w-xl text-stone-600 dark:text-stone-400 mb-8">
                    Day job is Laravel and SvelteKit at an agency. Side projects tend to be C# and React, plus whatever framework I'm curious about that month.
                </p>
                <a
                    href={`mailto:${emailAddress}`}
                    className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 transition-colors"
                >
                    Email me
                </a>
                <a href="#projects" className="ml-5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">
                    or see what I've built &darr;
                </a>
            </div>
            <img
                src={me}
                alt="Brendan at a diner in Tokyo"
                className="md:col-span-2 w-full max-h-72 md:max-h-none aspect-[4/5] md:aspect-square object-cover object-top"
            />
        </div>
    )
}

export default Intro;
