// TypewriterEffect.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
      <Typewriter
        words={['Full-stack Developer.', 'Web Developer.', 'Software Developer.']}
        loop={false}
        cursor
        cursorStyle='_'
        typeSpeed={60}
        deleteSpeed={45}
        delaySpeed={1500}
      />
  );
};

export default TypewriterEffect;
