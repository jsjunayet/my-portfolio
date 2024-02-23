import Hero from '@/Component/Home/Hero/Hero';
import Skill from '@/Component/Skill/Skill';
import React from 'react';

const Home = () => {
  return (
    <div className='mt-16 md:mt-20 container mx-auto'>
      <Hero></Hero>
      <Skill></Skill>
    </div>
  );
};

export default Home;