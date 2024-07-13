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
                            <div className="font-bold text-xl mb-2">Programming Languages</div>
                            <p className="text-base">
                                I have experience with the above programming languages and styling frameworks.
                            </p>
                        </div>
                    </div>
                    <div className="p-4">
                        <Link className="text-lg md:text-2xl hover:text-blue-500"
                            rel="noopener noreferrer"
                            to={`programming`}>
                            <p className="text-lg pl-3 pr-3 hover:bg-blue-400 hover:border-black dark:hover:border-black dark:hover:text-black hover:text-black border-blue-700 dark:border-blue-900 border-2 rounded-full text-blue-700 dark:text-blue-400 flex items-center">
                                Learn more
                                <FaLongArrowAltRight className="ml-1" size={20} />
                            </p>
                        </Link>
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
                            <div className="font-bold text-xl mb-2">Databases</div>
                            <p className="text-base">
                                I have experience with the above database softwares.
                            </p>
                        </div>
                    </div>
                    <div className="p-4">
                        <Link className="text-lg md:text-2xl hover:text-blue-500"
                            rel="noopener noreferrer"
                            to={`databases`}>
                            <p className="text-lg pl-3 pr-3 hover:bg-blue-400 hover:border-black dark:hover:border-black dark:hover:text-black hover:text-black border-blue-700 dark:border-blue-900 border-2 rounded-full text-blue-700 dark:text-blue-400 flex items-center">
                                Learn more
                                <FaLongArrowAltRight className="ml-1" size={20} />
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg bg-stone-200 flex flex-col h-full">
                    <div className="p-4 flex-grow flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                        {skills.map(stack => (
                                <TechstackItem img_url={stack.img_url} key={stack.img_url} />
                            ))}
                        </div>
                        <div className="text-gray-700 flex-grow" style={ {paddingTop: '102px'} }>
                            <div className="font-bold text-xl mb-2">Skills</div>
                            <p className="text-base">
                                These are some skills I've picked up along the way when creating my projects.
                            </p>
                        </div>
                    </div>
                    <div className="p-4">
                        <Link className="text-lg md:text-2xl hover:text-blue-500"
                            rel="noopener noreferrer"
                            to={`skills`}>
                            <p className="text-lg pl-3 pr-3 hover:bg-blue-400 hover:border-black dark:hover:border-black dark:hover:text-black hover:text-black border-blue-700 dark:border-blue-900 border-2 rounded-full text-blue-700 dark:text-blue-400 flex items-center">
                                Learn more
                                <FaLongArrowAltRight className="ml-1" size={20} />
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;
