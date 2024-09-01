import React from 'react';
import Title from "./Title";
import techstack from '../data/techstack';
import databases from '../data/databases';
import skills from '../data/skills';
import TechstackItem from './TechstackItem';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Techstack() {
    return (
        <div className="container mx-auto mt-10">
            <Title>Tech Stack</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="rounded overflow-hidden shadow-lg bg-stone-200 flex flex-col h-full">
                    <div className="p-4 flex-grow flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {techstack.map(stack => (
                                <TechstackItem img_url={stack.img_url} key={stack.img_url} />
                            ))}
                        </div>
                        <div className="text-gray-700 flex-grow">
                            <div className="font-bold text-xl mb-2">Development & Styling Tools</div>
                            <p className="text-base">
                                Proficient in a diverse set of programming languages and frameworks, enabling flexible and effective software solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg bg-stone-200 flex flex-col h-full">
                    <div className="p-4 flex-grow flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {databases.map(stack => (
                                <TechstackItem img_url={stack.img_url} key={stack.img_url} />
                            ))}
                        </div>
                        <div className="text-gray-700 flex-grow" style={ {paddingTop: '102px'} }>
                            <div className="font-bold text-xl mb-2">Database Systems</div>
                            <p className="text-base">
                                Skilled in managing and optimizing databases, ensuring reliable and efficient data storage.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg bg-stone-200 flex flex-col h-full">
                    <div className="p-4 flex-grow flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                        {skills.map(stack => (
                                <TechstackItem img_url={stack.img_url} key={stack.img_url} />
                            ))}
                        </div>
                        <div className="text-gray-700 flex-grow" style={ {paddingTop: '0px'} }>
                            <div className="font-bold text-xl mb-2">Technical Expertise & Tools</div>
                            <p className="text-base">
                                Mastered cutting-edge tools and technologies, consistently delivering innovative and impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;
