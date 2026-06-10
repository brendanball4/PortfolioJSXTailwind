import React from 'react';

function Title({ children, id }) {
    return (
        <div id={id && id} className='mb-5'>
            <h1 className='text-2xl font-bold tracking-tight text-stone-900 dark:text-white'>
                {children}
            </h1>
            <span className='block w-10 h-1 mt-2 rounded-full bg-violet-500 dark:bg-violet-400' />
        </div>
    )
}

export default Title;
