import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{
            background:`url(${appointment})`,
            backgroundSize: 'cover'
        }} 
        className='text-center p-5'>
            <h2 className='text-primary'>Contact Us</h2>
            <h3 className="text-xl text-white">Stay Connected With Us</h3>
            <div className='sm:mx-14 lg:mx-96'>
                <form className='mx-4 mt-2'>
                    <input className='block mb-2 rounded' type="email" name="email" id=""  placeholder='Email Address' />
                    <input className='block mb-2 rounded' type="text" name="subject" id="" placeholder='Subject' />
                    <textarea className='block mb-2 rounded' name="" id="" cols="23" rows="3" placeholder='Your Message'></textarea>
                </form>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>

    );
};

export default ContactUs;