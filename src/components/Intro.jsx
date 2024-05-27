import React from 'react';
import me from '../PortfolioImages/me.jpg'
import TypewriterEffect from './Typewrite';

function Intro() {
    return (
        <div className="pt-20 pb-6 flex justify-center items-center flex-col md:flex-row">
            <div class="justify-center items-center w-68 h-64 overflow-hidden rounded-[100px] md:rounded-full mb-4 md:mb-0 md:rounded-full shadow-lg md:hover:scale-110 transition-transform duration-300 ease-in-out">
                <img src={me} className='w-full h-full object-cover' alt="Picture of me with a dog"/>
            </div>

            <div className='md:ml-12 basis-2/3 text-center md:text-left'>
                    <div className='text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold'>Hi, I'm <a className='text-purple-500 dark:text-gray-500'>Brendan Ball</a></div>
                    <div className='text-2xl sm:text-xl mb-1 dark:text-white text-black'>I am a <TypewriterEffect /></div>
                    <p className='text-md max-w-xl font-bold mx-auto md:mx-0'>
                    As a full stack developer, I specialize in crafting applications from the ground up, 
                    leveraging my expertise in C#, Python, C++, React and 
                    various associated frameworks to bring ideas to life. Feel free to take a look 
                    at my projects below, as there are a lot of examples of my expertise.
                    </p>
                    <p className='text-md max-w-xl font-bold mt-2 mx-auto md:mx-0'>
                    If you would like to contact me, click any of the icons on the top right of 
                    the page or at the bottom of the page to contact me on your platform of choice.
                    </p>
            </div>
        </div>
    )
}

export default Intro;