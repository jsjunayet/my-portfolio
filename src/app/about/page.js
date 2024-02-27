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
                            <div className='flex items-center md:gap-20 gap-14'>
            <Link href={'https://drive.google.com/file/d/1Ce5xD_4k4dmVdqOl8D4xU7IBpK3_LgAr/view?usp=sharing'} className='flex gap-1 justify-center items-center mt-2  bg-[#130f2a] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                Resume <span><FaDownload /></span>
            </Link>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#130f2a] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
           <Link href={'https://github.com/jsjunayet'}> <FaGithubSquare className='text-2xl' /></Link>
                </div>
                <div className='bg-[#130f2a] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <Link href={'https://www.linkedin.com/in/jsjunayet/'}><FaLinkedin className='text-2xl' /></Link>
                </div>
                <div className='bg-[#130f2a] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <Link href={'https://www.facebook.com/profile.php?id=100088835246806'}><FaFacebook className='text-2xl' /></Link>
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

export default About;