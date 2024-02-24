"use client"
import React, { useRef } from 'react';
import './Project.css'
import ProjectCard from '../projectdata/ProjectCards/ProjectCard';
import { projectdatas } from '../projectdata/Projectdata';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';

const Project = () => {
    const slideRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
        ]
    };
    const sliderleft = () => {
        slideRef.current.slickNext()
    }
    const sliderRight = () => {
        slideRef.current.slickPrev()
    }
    return (
        <div className='project-container'>
            <h5>My Project</h5>
            <div className='arrow-right' onClick={sliderRight}>
                <span className='icons-1'><IoIosArrowBack /> </span>
            </div>
            <div className='arrow-left' onClick={sliderleft}>
                <span className='icons-2'> <IoIosArrowForward /></span>
            </div>
            <div className='project-content'>
                <Slider className=' h-full' ref={slideRef} {...settings}>
                    {
                        projectdatas.map((item) => (
                            <ProjectCard key={item.title} details={item}> </ProjectCard>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Project;
