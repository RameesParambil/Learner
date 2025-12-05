import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Bookingpage.css';
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        price: '',
        enquiry: ''
    });

    // ✅ Fetch correct course and price from db.json
    useEffect(() => {
        axios.get("https://learner-fawn.vercel.app/data/db.json")
            .then(response => {
                const courses = response.data.images; // your array
                const selected = courses.find(item => item.id.toString() === id);

                if (selected) {
                    setFormData(prev => ({
                        ...prev,
                        course: selected.course,
                        price: selected.price
                    }));
                }
            })
            .catch(err => console.log("Error loading course:", err));
    }, [id]);

    // Login validation
    const login1 = (e) => {
        e.preventDefault();
        return axios.get('http://localhost:8000/users', {
            params: {
                name: formData.name,
                email: formData.email
            }
        })
            .then(response => {
                const user = response.data.find(
                    u => u.name === formData.name && u.email === formData.email
                );

                if (user) {
                    setSuccess("Enquiry Successful");
                    return true;
                } else {
                    alert("Invalid Username or Email");
                    return false;
                }
            })
            .catch(err => {
                console.log("Error:", err);
                setError("Something went wrong!");
                return false;
            });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccess = await login1(e);

        if (loginSuccess) {
            axios.post("http://localhost:8000/booking", formData)
                .then(res => {
                    console.log(res);
                    navigate("/confirmation");
                })
                .catch(err => console.log(err));
        }
    };

    // Close form modal
    const closeModal = () => {
        navigate('/');
    };

    return (
        <div className="booking-page d-flex align-items-center"
            style={{ backgroundImage: 'url(/images/img-school-1-min.jpg)' }}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-7 mx-auto text-center">
                        <h1 className="display-4 text-white">Course Enquiry</h1>

                        <div className="wrapper3">
                            <div className="booking-form">

                                {/* Close Button */}
                                <span onClick={closeModal} className="icon-close" title="Close">
                                    <IoMdClose />
                                </span>

                                <form onSubmit={handleSubmit}>

                                    {/* Name */}
                                    <div className="input-box">
                                        <input type="text" placeholder="Full Name"
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required />
                                        <FaUser className="icon" />
                                    </div>

                                    {/* Email */}
                                    <div className="input-box">
                                        <input type="email" placeholder="Email"
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required />
                                        <FaEnvelope className="icon" />
                                    </div>

                                    {/* Phone */}
                                    <div className="input-box">
                                        <input type="tel" placeholder="Phone Number"
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            required />
                                        <FaPhoneAlt className="icon" />
                                    </div>

                                    {/* Auto-filled Course */}
                                    <div className="input-box">
                                        <input type="text" value={formData.course} readOnly />
                                    </div>

                                    {/* Auto-filled Price */}
                                    <div className="input-box">
                                        <input type="text" value={formData.price} readOnly />
                                    </div>

                                    {/* Enquiry Message */}
                                    <div className="input-box">
                                        <textarea placeholder="My Enquiry"
                                            onChange={e => setFormData({ ...formData, enquiry: e.target.value })}
                                            className="enquiry" required></textarea>
                                    </div>

                                    {/* Submit */}
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
