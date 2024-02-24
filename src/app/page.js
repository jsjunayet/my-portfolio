import Hero from '@/Component/Home/Hero/Hero';
import Project from '@/Component/Project/Projects/Project';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Contact from './contact/page';
import Footer from '@/Component/Footer/Footer';

const Home = () => {
  return (
    <>
    <div className='mt-16 md:mt-20 container mx-auto'>
      <Hero></Hero>
      <Skill></Skill>
      <Project></Project>
      {/* <Contact></Contact> */}
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;