import React from 'react';
import Title from "./Title";
import techstack from '../data/techstack';
import TechstackItem from './TechstackItem';

function Techstack() {
    return (
        <div>
            <Title>Current Tech Stack</Title>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
               {techstack.map(stack => (
                  <TechstackItem 
                     stack_name={stack.stack_name}
                     img_url={stack.img_url}
                  />
               ))}
            </div>
        </div>
    )
}

export default Techstack;