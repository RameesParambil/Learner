import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import { BiMinusBack } from "react-icons/bi";
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyProfile from "../pages/MyProfile";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ProfileContext } from "../pages/ProfileContext";

function Navbar(){

  const {handleLogout} = useContext(ProfileContext);

    return(
      <div>
        <nav className='navbar  navbar-expand-lg navbar-light bg-white sticky-top '>
          <Link to='/' className="navbar-brand1">
            <BiMinusBack className="icon1"/>
            <span>Learner</span>
          </Link>
          
            
          <button style={{width:"60px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
            </button>
            <div  class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"70px"}}>
              <li  className='Nav-item'>
                  <Link to="/" style={{color:"black",textDecoration:"none"}}> Home </Link>
                </li>
                <li  className='Nav-item'>
                  <Link to="about" style={{color:"black",textDecoration:"none"}}>About</Link>
                </li>
                <li className="Nav-item">
                  <Link to="Course" style={{color:"black",textDecoration:"none"}}>Courses</Link>
                </li>
                <li  className='Nav-item'>
                  <Link to="login" style={{color:"black",textDecoration:"none"}}>Login</Link>
                </li>
                <li  className='Nav-item'>
                  <Link to="register" style={{color:"black",textDecoration:"none"}}>Register</Link>
                </li>
                <li  className='Nav-item'>
                  <Link to="contact" style={{color:"black",textDecoration:"none"}}>Contact Us</Link>
                </li>
                <li className="dropdown">
                  <NavDropdown   title="MyProfile" id="navbarScrollingDropdown" style={{textDecoration:"none"}}>
                    <NavDropdown.Item href="#action3" >
                      <Link to="myprofile" style={{color:"black",textDecoration:"none" }}>My Profile</Link>
                    </NavDropdown.Item>
                      <NavDropdown.Item href="#action4" onClick={handleLogout}>
                        <Link  style={{color:"black",textDecoration:"none" }}>Logout</Link>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" >
                        <Link to="admin" style={{color:"black",textDecoration:"none" }}>Admin</Link>{" "}
                      </NavDropdown.Item>
                  </NavDropdown>
                </li>
                 
            </ul>
          
          </div> 
        </nav>
      </div>
    )
}

export default Navbar;