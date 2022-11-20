import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Brendan M. Ball</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                I'm a software & web devloper that builds my apps from the ground up using the latest and greatest that technology has to offer.
                I am currently enrolled in University and majoring in Computer Science.<br />
                I have co-developed a few projects that are showcased in the Portfolio section.
                One project is an HR web application built on .NET CORE 5, EntityFramwork, Blazor, Docker, and more! 
                This was created in collaboration with the <a href='https://www.mhfoodbank.com/' className='text-green-300 hover:underline underline-offset-2 decoration-1'>Medicine Hat Food Bank</a>.
            </p>
        </div>
    )
}

export default Intro;