"use client"
import React, { useState } from 'react';
import SubSkill from '../SubSkill/SubSkill';
import { mySkill } from '../data/picture/data';

import './style.css'
import SideSkill from '../sidever/SideSkill';


const Skill = () => {
    const [selectedskill, setselectedskill] = useState(mySkill[0]);
    const handleselectedskill = (data) => {
        setselectedskill(data)
    }
    return (
        <section className='skills-container'>
            <h5>Technical Proficiecy</h5>
            <div className='Skills-content'>
                <div className='skills'>
                    {
                        mySkill.map((item) => <SubSkill key={item.title}
                            iconUrl={item.icons}
                            title={item.title}
                            isactive={selectedskill.title === item.title}
                            onclick={() => handleselectedskill(item)}
                        ></SubSkill>
                        )}
                </div>
                <div className='skill-info'>
                    <SideSkill heading={selectedskill.title} skills={selectedskill.skills}></SideSkill>
                </div>

            </div>
        </section>
    );
};

export default Skill;