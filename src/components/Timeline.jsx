import React from "react";
import { experience, education } from "../data/timeline";
import Title from "./Title";

function Entries({ items }) {
    return (
        <ol className="border-t border-stone-200 dark:border-stone-800">
            {items.map(item => (
                <li key={item.role + item.year} className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-1 md:gap-8 py-5 border-b border-stone-200 dark:border-stone-800">
                    <span className="font-mono text-xs text-stone-500 pt-1">{item.year}</span>
                    <div>
                        <h3 className="font-display font-semibold text-stone-900 dark:text-white">
                            {item.role}
                            <span className="font-sans font-normal text-stone-500"> · {item.org}</span>
                        </h3>
                        {item.details && (
                            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{item.details}</p>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    );
}

function Timeline() {
    return (
        <div className="my-20">
            <Title>Experience</Title>
            <Entries items={experience} />
            <div className="mt-14">
                <Title>Education</Title>
                <Entries items={education} />
            </div>
        </div>
    )
}

export default Timeline;
