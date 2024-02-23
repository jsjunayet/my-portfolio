"use client"
import React from 'react';
import style from './style.css';
import Image from 'next/image';
import Reacts from '../../../assest/React.png';
import Node from '../../../assest/Node.png';
import express from '../../../assest/Express.png';
import Mogodb from '../../../assest/mongodb.png';
import img1 from '../../../assest/Firefly 20240221011537 (1).png';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
    return (
        <section className="hero_container">
            <div className='hero-content'>
                <h2 className=' text-gray-400'>
                    HI, I`m Junayet Shiblu. J.r MERN Stack {' '}
                    <span style={{ color: '#149ECA', fontWeight: 'bold' }}>
                        <Typewriter
                            words={["Developer"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={2000}
                        />
                    </span>
                </h2>
                <p>Passionate MERN Stack Developer | Transfroming ideas into seamless and
                    Visually Stunnig Web Solutions.
                </p>
                <div className=' space-x-0 md:space-x-2 gap-4'>
                    <button className='btn'>Project--</button>
                    <button className='btn2'>Contact--</button>
                </div>
            </div>
            <div className='hero-img'>
                <div>
                    <div className='tech-img'>
                        <Image src={Mogodb} height={80} alt='mongodb' width={80}></Image>
                    </div>
                    <Image className=' rounded-xl' src={img1} height={250} alt='junayet' width={250}></Image>
                </div>
                <div>
                    <div className='tech-img'>
                        <Image src={express} height={50} alt='express' width={50}></Image>
                    </div>
                    <div className='tech-img'>
                        <Image src={Reacts} height={50} alt='react' width={50}></Image>
                    </div>
                    <div className='tech-img'>
                        <Image src={Node} height={45} alt='node' width={45}></Image>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;