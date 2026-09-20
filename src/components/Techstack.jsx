import React from 'react';
import Title from "./Title";
import techstack from '../data/techstack';
import databases from '../data/databases';
import skills from '../data/skills';
import TechstackItem from './TechstackItem';

const groups = [
    {
        title: 'Frontend',
        desc: 'Where most of my recent work lives. React, Svelte, and Vue, usually with TypeScript and Tailwind alongside.',
        items: techstack,
    },
    {
        title: 'Backend & databases',
        desc: 'Modern PHP and Laravel are the day-to-day at work, alongside C# and .NET for APIs, with SQL databases behind it all.',
        items: databases,
    },
    {
        title: 'Tools & platforms',
        desc: 'The rest of the toolbox: desktop apps with Electron, Directus extensions, Stripe payments, Docker, and Azure.',
        items: skills,
    },
];

function Techstack() {
    return (
        <div className="mt-10">
            <Title>What I work with</Title>
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {groups.map(g => (
                    <div key={g.title}>
                        <dt className="font-display font-semibold text-stone-900 dark:text-white mb-2">{g.title}</dt>
                        <dd className="text-sm text-stone-600 dark:text-stone-400 mb-4">{g.desc}</dd>
                        <dd className="grid grid-cols-3 gap-3">
                            {g.items.map(i => (
                                <TechstackItem key={i.stack_name} stack_name={i.stack_name} img_url={i.img_url} />
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default Techstack;
