"use client"
import React, { useContext } from 'react';
import './projectCard.css'
import Image from 'next/image';
import Link from 'next/link';
import { ThemContext } from '@/Component/Context/ThemContext';

const ProjectCard = ({ details }) => {
    const { Light } = useContext(ThemContext)
    return (
        <div className={`project-card ${Light == "light" ? " text-gray-300" : ""}`}>
            <div className='Contaner-img'> <Image src={details.img} alt='img' height={300} width={400}></Image></div>
            <div>
                <h6>{details.title}</h6>
                <div>
                    <p>{details.description}</p>
                    <div className='flex justify-between items-center mt-3'>
                        <Link href={details.githubLink}><button className='btn4'>Github</button></Link>
                        <Link href={details.liveLink}><button className='btn5'>Live</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;