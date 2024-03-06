import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <div>
                <h1 className='text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold'>Hi, I'm <a className='text-blue-500 dark:text-gray-500'>Brendan Ball</a></h1>
            </div>
            <p className='text-base md:text-xl mb-3 font-medium'>Full Stack Developer</p>
            <p className='text-md max-w-xl mb-6 font-bold'>
            As a full stack developer, I specialize in crafting applications from the ground up, leveraging my expertise in C#, Python, C++, and various associated frameworks to bring ideas to life. 
            I have dedicated myself to both solo and collaborative development efforts that are featured in the Portfolio section. 
            My portfolio showcases a wide array of projects, reflecting my ability to navigate and utilize a diverse tech stack effectively.
            </p>
        </div>
    )
}

export default Intro;