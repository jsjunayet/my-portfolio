import Image from 'next/image';
import './aboutsetion.css'
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const AboutSetion = () => {   
    return (
        <div className='ml-0 md:ml-2   max-w-5xl mx-auto md:mt-20 mt-6'>
            <p className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-10 mb-8'>My About</p>
           <div className='flex md:flex-row-reverse md:gap-x-20 gap-x-0 gap-y-8 md:gap-y-0 flex-col-reverse'>
           <div className=' space-y-3 px-3 flex-1 md:pt-8 mt-0  '>
                            <p className='text-2xl font-semibold'>I`m <span className='text-green-600'>Junayet Shiblu</span>, a Web Developer</p>
                            <p className='text-lg text-[#a2a8a8]'> Passionate MERN stack developer who loves making user-friendly Website . I enjoy working with others to turn tricky ideas into smart solutions. I`m dedicated and a good team player, ready to bring my skills to your projects. Excited about creating cool web stuff together!</p>
                            <p className='text-base text-[#6e7272]'>
                                Also I am studying computer science and engineering at National Institute of Textile Engineering and Research so my love for coding works differently.
                            </p> 
                            <div className='flex items-center md:gap-5 gap-5'>
            <Link href={"/contact"} className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" >
                CONTACT ME
            </Link>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <Link href={"/about"}>MY PROJECT</Link>
                </div>
              
            </div>
            </div>    
                          
           </div>

           <div className='blob'>
           </div>
           </div>
        </div>
    );
};

export default AboutSetion;