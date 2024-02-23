import React from 'react';
import SubSkill from './SubSkill/SubSkill';
import { mySkill } from './data/picture/data';


const Skill = () => {
    return (
        <section className='skills-container'>
            <h5>Technical Proficiecy</h5>
            <div className='Skills-content'>
                <div className='skills'>
                    {
                        mySkill.map((item) => <SubSkill key={item.title} iconUrl={item.icons} title={item.title}></SubSkill>
                        )}
                </div>

            </div>
        </section>
    );
};

export default Skill;