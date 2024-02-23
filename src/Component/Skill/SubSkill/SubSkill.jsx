import Image from 'next/image';
import React from 'react';

const SubSkill = ({ title, iconUrl, isactive, onclick }) => {
    return (
        <div className={`skills-card ${isactive ? "active" : ''}`}
        >
            <div className='skill-icon'>
                <Image src={iconUrl} alt={title} height={40} width={50}></Image>
            </div>
            <span>{title}</span>

        </div>
    );
};

export default SubSkill;