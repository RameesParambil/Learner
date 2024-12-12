import React, { useEffect, useState } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';
import './Bookingpage.css'; // 
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';



function BookingPage() {
    const { id } = useParams(); 

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course:'',
        price:'',
        enquiry:''
        
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/images/${id}`)

        .then(response=> {
            const {course, price} = response.data;
            setFormData(prevState => ({
                ...prevState,
                course,
                price
            }))
        })
        .catch(err => console.log(err))
    },[])

    const navigate = useNavigate();

    const login1 = (e) => {
        e.preventDefault();
        return  axios.get('http://localhost:8000/users',{
            params:{
                name:formData.name,
                email:formData.email
            }
        })
        .then(response => {
            const user = response.data.find (
            (u) => u.name === formData.name && u.email === formData.email
            );

            if(user) {
                setSuccess('Enquiry Successful');
                return true;
            }
            else{
                alert('Invalid Username or email');
                return false;
            }
        })
        .catch(err => {
            console.log('err');
            setError("Something went wrong. Please try again.");
            return false;
        });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        const loginsuccess = await login1(e);

        if(loginsuccess){
            axios.post('http://localhost:8000/booking', formData)
        
            .then(response =>{ console.log(response);
                
            navigate('/confirmation')
        }
        )
        }
    };
    
    const closeModal = () => {
        navigate('/'); 
    };

    return (
        <div className="booking-page  d-flex align-items-center " style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                    <h1 className="display-4 text-white">Course Enquiry</h1>
                        <div className='wrapper3'>
                            <div className="booking-form">
                                {/* close button */}  
                            <span onClick={closeModal} className="icon-close" title="Close">
                                <IoMdClose   />
                            </span>
                                <form onSubmit={handleSubmit} >
                                    <div className="input-box">
                                        <input type="text" placeholder='Full Name' onChange={e=>setFormData({...formData,name:e.target.value})}  required />
                                        <FaUser className="icon" />
                                    </div>

                                    <div className="input-box">
                                        <input type="email" placeholder='Email' onChange={e=> setFormData({...formData,email:e.target.value})} required />
                                        <FaEnvelope  className="icon" />
                                    </div>

                                    <div className="input-box">
                                        <input type="tel" placeholder='Phone Number' onChange={e=> setFormData({...formData,phone:e.target.value})}  required />
                                        <FaPhoneAlt className="icon" />
                                    </div>

                                    <div className="input-box">
                                        <input type="text" value={formData.course}  readOnly />
                                    </div>

                                    <div className="input-box">
                                        <input type="text" value={formData.price}  readOnly />
                                    </div>
                                    <div className='input-box'>
                                        <textarea name='message' placeholder='My Enquiry' className='enquiry' onChange={e=> setFormData({...formData,enquiry:e.target.value})} required></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;


