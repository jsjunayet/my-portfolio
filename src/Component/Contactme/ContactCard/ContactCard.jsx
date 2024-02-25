import React from 'react';
import './ContactCard.css'
import Image from 'next/image';
import Link from 'next/link';

const ContactCard = ({ iconURL, Text, link }) => {
    return (
        <div className='contact-card'>
            <div className='icons'>
                <Link className=' cursor-pointer' href={link}><Image src={iconURL} alt={Text} height={50} width={50}></Image></Link>
            </div>
            <p>{Text}</p>
        </div>
    );
};

export default ContactCard;