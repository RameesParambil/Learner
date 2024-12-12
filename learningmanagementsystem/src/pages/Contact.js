import React from 'react';
import './Contact.css';
import {  useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';

function Contact() {

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    
    //     formData.append("access_key", "8984fb92-c70d-4aee-9f51-93ec2915c8f7");
    
    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);
    
    //     const res = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       },
    //       body: json
    //     }).then((res) => res.json());
    
    //     if (res.success) {
    //         Swal.fire({
    //             title: "Success!",
    //             text: "Message sent successfully!",
    //             icon: "success"
    //           });
    //     }
    //   };
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
