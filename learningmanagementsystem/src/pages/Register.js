import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Register() {
    const [values, setValues] = useState({
        name: '', 
        email: '',
        password: '',
        checkbox: false
    });
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const data = {
            UserName : values.name,
            UserEmail : values.email,
            UserPassword : values.password,
            checkbox : values.checkbox
        }

        axios.post('http://127.0.0.1:8000/api/register1', data)
            .then(response => { 
                console.log(response);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    const closeModal = () => {
        navigate('/');
    };
    
    return (
        <div id="register" className="register vh-100 d-flex align-items-center" style={{ backgroundImage: 'url(/images/img-school-1-min.jpg)' }}> 
            <div className="container">
                <div className="row login2">
                    <div className="col-lg-7 mx-auto text-center">
                        <div className="wrapper1 modal" id="wrapper">
                            <div className="form-box">
                                {/* close button */}
                                <span onClick={closeModal} className="icon-close" title="Close">
                                    <IoMdClose />
                                </span>
                                <form onSubmit={handleRegister}>
                                    <h1>Registration</h1>
                                    <div className="input-box">
                                        <input 
                                            type="text" 
                                            placeholder="Username" 
                                            value={values.name}
                                            onChange={e => setValues({ ...values, name: e.target.value })} 
                                            required 
                                        />
                                        <FaUser className="icon" />
                                    </div>
                                    <div className="input-box">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            value={values.email}
                                            onChange={e => setValues({ ...values, email: e.target.value })} 
                                            required 
                                        />
                                        <FaEnvelope className="icon" />
                                    </div>
                                    <div className="input-box">
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            value={values.password}
                                            onChange={e => setValues({ ...values, password: e.target.value })} 
                                            required 
                                        />
                                        <FaLock className="icon" />
                                    </div>
                                    <div className="remember-forgot1">
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                checked={values.checkbox} 
                                                onChange={e => setValues({ ...values, checkbox: e.target.checked })} 
                                            /> I agree to the terms & conditions
                                        </label>
                                    </div>
                                    <button type="submit">Register</button>
                                    <div className="register-link">
                                        <p>Already have an account? <Link className="link" to="/login">Login</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;



