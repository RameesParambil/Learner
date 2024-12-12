import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaLock,FaEnvelope } from "react-icons/fa";

import './Admin.css' ;


function Admin() {
    const [values, setValues] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleAdmin = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8000/admin", {
            params: {
                email: values.email,
                password: values.password
            }
        })
        .then((response) => {
            const admin = response.data.find (
                (u) => u.email === values.email && u.password === values.password
            );
            if (admin) {
                navigate('/dashboard')
            }
            else {
                setError("Invalid email or Password.");
            }
        })
        .catch(err => {
            console.log(err);
            setError("Something went wrong. Please try again.");
          });
        
    }

  return (
    <div className='admin d-flex w-100 justify-content-center align-items-center  bg-light vh-100'  style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
        <div className=' border  shadow px-5 pb-5  rounded' style={{width: "600px"}}>
            <h1  className='justify-content-center align-items-center  d-flex'>Admin</h1> 
            {error && <div className='alert alert-danger'>{error}</div> }
            
            <form onSubmit={handleAdmin}>
                <div className='mb-2 input-box'>
                    <input type='email'  placeholder='Email' onChange={e => setValues({...values, email:e.target.value})} />
                    <FaEnvelope  className="icon" />
                </div>
                <div className='mb-2 input-box'>
                    <input type='password'  placeholder='Password' onChange={e => setValues({...values, password:e.target.value})} />
                    <FaLock className="icon" />
                </div>
                <div className='justify-content-center align-items-center  d-flex mt-3'>
                    <button type='submit' className='btn btn-success'>Login</button> 
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Admin;


// register details and booking details