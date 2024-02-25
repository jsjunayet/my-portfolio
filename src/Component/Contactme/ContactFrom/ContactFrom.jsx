import React from 'react';
import './ContactFrom.css'

const ContactFrom = () => {
    return (
        <div className='contact-from'>
            <form action="">
                <div className='name-contaner'>
                    <input required type="text" name='firstname' placeholder='First Name' />
                    <input required type="text" name='firstname' placeholder='Last Name' />
                </div>
                <input required type="text" name='email' placeholder='Email' />
                <textarea required name="message" placeholder='Message'></textarea>
                <button>Send</button>
            </form>

        </div>
    );
};

export default ContactFrom;