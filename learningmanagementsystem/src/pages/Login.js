import React, { useState } from "react";
import './Login.css';
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Login(){
    const [values, setValues] = useState({
        name:'',
        password:''
    })
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); 
    const handleLogin = (e)=> {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/register',{ 
            params:{
                name:values.name,
                password:values.password,
                checkbox:values.checkbox
            }
        })
        .then(response => {
            const user = response.data.find (
                (u) => u.name === values.name && u.password === values.password && u.checkbox === values.checkbox
            );
            if (user) {
                setSuccess("Login Successful")
                navigate('/')
            }
            else {
                setError("Invalid Username or Password");
            }
        })
        .catch(err=> {
            console.log(err);
            setError("Something went wrong. Please try again.")

        });
    };

    const closeModal = () => {
        navigate('/'); 
    }; 
    return(
        <div>
            <div id="login" className="login vh-100  d-flex align-items-center" style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}> 
                <div className="col-lg-7 mx-auto text-center">
                    <div className="wrapper">
                        <div className="form-box  "> 
                            {error && <div className="alert alert-danger">{error}</div>}
                            {/* close button */}  
                            <span onClick={closeModal} className="icon-close" title="Close">
                                <IoMdClose   />
                            </span>
                            <form onSubmit={handleLogin}>
                                <h1>Login</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Username" onChange={e=> setValues({...values, name:e.target.value})} required/>
                                    <FaUser className="icon" />
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" onChange={e=> setValues({...values, password:e.target.value})} required/>
                                    <FaLock className="icon" />
                                </div>
                                <div className="remember-forgot1">
                                    <label><input type="checkbox" onChange={e=> setValues({...values, checkbox:e.target.value})}/>Remember-me</label>
                                    <Link className="forgot" to="#">Forgot password?</Link>
                                </div>
                                <button type="submit">Login</button>
                                <div className="register-link">
                                    <p>Don't have an account? <Link className="link" to="/register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
                    
                
            </div>
           
        </div>
        
    );
}

export default Login;  
