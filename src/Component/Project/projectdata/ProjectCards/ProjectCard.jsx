import React from 'react';
import './projectCard.css'
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ details }) => {

    return (
        <div className='project-card'>
            <Image src={details.img} alt='img' height={300} width={400}></Image>
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