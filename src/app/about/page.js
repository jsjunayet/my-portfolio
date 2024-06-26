import Image from 'next/image';
import './about.css'
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const About = () => {   
    return (
        <div className=' min-h-screen flex justify-center items-center pt-20 max-w-7xl mx-auto mb-10'>
           <div className='flex md:flex-row gap-10 flex-col-reverse'>
           <div className=' space-y-3 px-3 flex-1 md:mt-16 mt-0  '>
                            <p className='text-3xl font-semibold'>I`m <span className='text-green-600'>Junayet Shiblu</span>, a Web Developer</p>
                            <p className='text-xl text-[#a2a8a8]'> Passionate MERN stack developer who loves making user-friendly Website . I enjoy working with others to turn tricky ideas into smart solutions. I`m dedicated and a good team player, ready to bring my skills to your projects. Excited about creating cool web stuff together!</p>
                            <p className='text-xl text-[#6e7272]'>
                                Also I am studying computer science and engineering at National Institute of Textile Engineering and Research so my love for coding works differently.
                            </p>
                          
           </div>

           <div className='blob'>
           </div>
           </div>
        </div>
    );
};

export default About;