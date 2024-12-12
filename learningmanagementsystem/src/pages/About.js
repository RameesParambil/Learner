import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function About() {
  return (
    <div>
        <div id='about' className='about  vh-100 d-flex align-items-center' style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
            <div className='container'>
              <div className='row'>
                  <div className='col-lg-7 mx-auto text-center'>
                    <h1 id='about2' className='display-4 heading '>About Us</h1>
                    <p className='text-white description'>Another free template by Untree.co. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.</p>
                    <Link to="/course" className="btn btn-primary me-3">Explore Courses</Link>
                  </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default About;
