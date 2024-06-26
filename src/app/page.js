import Hero from '@/Component/Home/Hero/Hero';
import Project from '@/Component/Project/Projects/Project';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Footer from '@/Component/Footer/Footer';
import Contact from '@/Component/Contactme/Contackt/Contact';
import Education from '@/Component/Education/Education';
import Hire from '@/Component/hire/Hire';

const Home = () => {
  return (
    <>
    <div className='pt-10 md:pt-20 max-w-5xl mx-auto'>
      <Hero></Hero>
      <Skill></Skill>
      <Education></Education>
      <Project></Project>
      <Hire></Hire>
      <Contact></Contact>
    </div>
   
    </>
  );
};

export default Home;