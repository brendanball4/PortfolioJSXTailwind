import React from 'react';
import me from '../PortfolioImages/me.jpg'
//import TypeAnimation from 'react-type-animation';

function Intro() {
    // const ExampleComponent = () => {
    //     return (
    //       <TypeAnimation
    //         sequence={[
    //           'Full Stack Developer',
    //           1000,
    //           'Software Developer',
    //           1000,
    //           'Web Developer',
    //           1000,
    //           'Front End Developer',
    //           1000,
    //           'Back End Developer',
    //           1000,
    //           'Database Administrator',
    //           1000,
    //         ]}
    //         wrapper="span"
    //         speed={30}
    //         className='text-black dark:text-orange-300'
    //         style={{ fontSize: '2em', display: 'inline-block' }}
    //         repeat={Infinity}
    //       />
    //     );
    //   };

    return (
        <div className="pt-20 pb-6 flex justify-center items-center flex-col md:flex-row">
            <div class="justify-center items-center w-68 h-64 overflow-hidden rounded-[100px] md:rounded-full mb-4 md:mb-0 md:rounded-full shadow-lg md:hover:scale-110 transition-transform duration-300 ease-in-out">
                <img src={me} className='w-full h-full object-cover' alt="Picture of me with a dog"/>
            </div>

            <div className='md:ml-12 basis-2/3 text-center md:text-left'>
                <div>
                <h1 className='text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold'>Hi, I'm <a className='text-purple-500 dark:text-gray-500'>Brendan Ball</a></h1>
                {/*<ExampleComponent />*/}
                <p className='text-md max-w-xl font-bold mx-auto md:mx-0'>
                As a full stack developer, I specialize in crafting applications from the ground up, leveraging my expertise in C#, Python, C++, and various associated frameworks to bring ideas to life. 
                I have dedicated myself to both solo and collaborative development efforts that are featured in the Portfolio section. 
                My portfolio showcases a wide array of projects, reflecting my ability to navigate and utilize a diverse tech stack effectively.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Intro;