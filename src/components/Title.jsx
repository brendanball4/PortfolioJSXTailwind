import React from 'react';

function Title({ children, id }) {
    return (
        <div id={id} className='mb-6'>
            <h2 className='font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white'>
                {children}
            </h2>
            <span className='block w-10 h-0.5 mt-2 bg-accent-500' />
        </div>
    )
}

export default Title;
