"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { ThemContext } from '@/Component/Context/ThemContext';
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
    const { Light } = useContext(ThemContext)
    return (
        <section className="max-w-5xl mx-auto md:mt-16 mt-0">
            <div className='flex md:flex-row gap-y-5 md:gap-y-0 flex-col-reverse md:justify-between justify-center items-center w-full '>
            <div className='md:w-[50%] w-full space-y-2 md:space-y-5 px-5'>
                <h2 className={`md:text-4xl text-2xl md:leading-[55px] leading-[40px] font-semibold ${Light == "text-gray-900" ? "" : "text-gray-400"}`}>
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
                <p className='md:text-base text-sm'>Passionate MERN Stack Developer | Transforming ideas into seamless and visually stunning web solutions. Skilled in teamwork and collaboration to achieve exceptional results.
                </p>
                <div className='flex items-center md:gap-20 gap-5'>
            <a className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" href='/Juanyet_Shiblu_MERN_Stack_Developer_resume.pdf' download>
                Resume <span><FaDownload /></span>
            </a>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <a href='https://github.com/jsjunayet' target='blank'> <FaGithubSquare className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://www.linkedin.com/in/jsjunayet/'} target='blank'><FaLinkedin className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://web.facebook.com/jsjunayet73'} target='blank'><FaFacebook className='text-2xl' /></a>
                </div>
            </div>
            </div>
            </div>
            <div className='md:w-[40%] w-full flex flex-col justify-center items-center mt-10 md:mt-0'>        
                    <div className='md:w-full w-72 '>
                    <Image className='w-full object-cover rounded-xl ' src={'/junayetshiblu.png'} height={250} alt='junayet' width={250}></Image>    
                    </div>
             </div>
            </div>
              
        </section>
    );
};
export default Hero;