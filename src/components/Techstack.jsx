import React from 'react';
import Title from "./Title";
import techstack from '../data/techstack';
import databases from '../data/databases';
import skills from '../data/skills';
import TechstackItem from './TechstackItem';

const cards = [
    {
        title: 'Frontend',
        desc: 'Where most of my recent work lives. React, Svelte, and Vue, usually with TypeScript and Tailwind alongside.',
        items: techstack,
    },
    {
        title: 'Backend & Databases',
        desc: 'C# and .NET are home base for APIs, with SQL databases handling the data behind them.',
        items: databases,
    },
    {
        title: 'Tools & Platforms',
        desc: 'The rest of the toolbox: desktop apps with Electron, Directus extensions, Stripe payments, Docker, and Azure.',
        items: skills,
    },
];

function Techstack() {
    return (
        <div className="container mx-auto mt-10">
            <Title>Tech Stack</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-5">
                {cards.map(card => (
                    <div key={card.title} className="flex flex-col rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm p-5">
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {card.items.map(stack => (
                                <TechstackItem stack_name={stack.stack_name} img_url={stack.img_url} key={stack.stack_name} />
                            ))}
                        </div>
                        <div className="mt-auto">
                            <div className="font-bold text-xl mb-2 text-stone-900 dark:text-white">{card.title}</div>
                            <p className="text-base text-stone-600 dark:text-stone-400">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Techstack;
