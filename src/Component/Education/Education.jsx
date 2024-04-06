"use client"
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemContext } from '../Context/ThemContext';

const Education = () => {
    const { Light } = useContext(ThemContext)
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='main_content'>
            <h5>Educational qualifications</h5>
            <ul className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${Light == "light" ? "text-gray-300" : ""}`}>
                <li data-aos="fade-up">
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/niter.png" alt='niter' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-start  md:text-end Alldesgin">
                        <time className="font-mono italic">2022-present</time>
                        <p>B.Sc in Computer Science and enginering.</p>
                        <p>National Institute of Textile engineering &
                            Research.
                        </p>
                        <p>
                            Currently I am studying B.Sc in CSE at National Institute of Textile Engineering and Research located at Nayarhat, Savar, Dhaka.
                        </p>
                        <time>CGPA: 3.18</time>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                    <hr />
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/colloges.png" alt='niter' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-end  Alldesgin">
                        <time className="font-mono italic">2019-2021</time>
                        <p>Higher Secondary School Certificate</p>
                        <p>
                            Saydabad Ideal Govt College & University
                        </p>
                        <p>
                            I completed HSC from Saydabad Ideal Govt College &
                            University
                            located at saydabad, kasba, Brahmanbaria.
                        </p>
                        <time>GPA: 5.00</time>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                    <hr />
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/shikarpur.png" alt='niter' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-start md:text-end  Alldesgin">
                        <time className="font-mono italic">2016-2019</time>
                        <p>Secondary School Certificate</p>
                        <p>Shikarpur High School
                        </p>
                        <p>
                            I completed SSC from Shikarpur High School
                            located at Shikarpur, kasba, Brahmanbaria.
                        </p>
                        <time>GPA: 4.44</time>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                    <hr />
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/shikarpur.png" alt='niter' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-end  Alldesgin">
                        <time className="font-mono italic">2015-2016</time>
                        <p>Junior School Certificate</p>
                        <p>Shikarpur High School
                        </p>
                        <p>
                            I completed JSC from Shikarpur High School
                            located at Shikarpur, kasba, Brahmanbaria.
                        </p>
                        <time>CGPA: 4.70</time>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Education;