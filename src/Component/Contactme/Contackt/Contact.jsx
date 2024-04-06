"use client"
import React, { useContext, useEffect } from 'react';
import './style.css'
import ContactCard from '../ContactCard/ContactCard';
import ContactFrom from '../ContactFrom/ContactFrom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemContext } from '@/Component/Context/ThemContext';


const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='Contact-container'>
            <h5 className=' mt-4 lg:mt-0'>Contact Information</h5>

            <div className='contact-content'>
                <div data-aos="fade-up" data-aos-delay="100" className='left' >
                    {/* <ContactCard iconURL='/mail.png' Text="junayetshiblu0@gmail.com" ></ContactCard> */}
                    <ContactCard link='https://github.com/jsjunayet' iconURL="/github.png" Text="jsjunayet" ></ContactCard>
                    <ContactCard link='https://www.linkedin.com/in/jsjunayet/' iconURL='/linkedin.png' Text='Junayet Shiblu' ></ContactCard>
                </div>
                <div data-aos="fade-up" className='right'>
                    <ContactFrom></ContactFrom>
                </div>
            </div>
        </section>
    );
};

export default Contact;