"use client"
import React from 'react';
import style from './style.css';
import Image from 'next/image';
import Reacts from '../../../assest/React.png';
import Node from '../../../assest/Node.png';
import express from '../../../assest/Express.png';
import Mogodb from '../../../assest/mongodb.png';

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';


const Hero = () => {
    return (
        <section className="hero_containerse">
            <div className='hero-contentse'>
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
                <div className='  gap-4 md:flex  items-center '>
                    <Link href={'/service'}><button className='btn2'>Project--</button></Link>
                    <Link href={'/contact'}><button className='btn2'>Contact--</button></Link>
                </div>
            </div>
            <div className='hero-img'>
                <div>
                    <div className='tech-img'>
                        <Image src={Mogodb} height={80} alt='mongodb' width={80}></Image>
                    </div>
                    <Image className=' rounded-xl ' src={'/junayet.png'} height={250} alt='junayet' width={250}></Image>
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