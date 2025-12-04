import React from 'react';
import './Contact.css';
import {  useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';

function Contact() {

    return (
        <section className='contact' style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
            <form > 
                <h2>Contact Us</h2>
                <div className='input-box'>
                    
                    <input type='text' className='field' placeholder='Enter your Name'  name='name' required/>
                </div>
                <div className='input-box'>
                    
                    <input type='email' className='field' placeholder='Enter your Email' name='email' required/>
                </div>
                <div className='input-box'>
                    
                    <textarea name='message' id='' className='field first' placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form> 
        </section>
    );
}

export default Contact;
