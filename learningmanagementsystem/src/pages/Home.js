import React from "react";
import './Home.css';
import { Link, useNavigate } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Home() {
    const nav= useNavigate();
    const read=()=>{
        nav('/about') 
    }
    return ( 
        <div>
            <div id="home" className="hero vh-100 d-flex align-items-center" style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h5 className="text-uppercase mb-3" style={{color: "#06BBCC"}}>Best Online Courses</h5>
                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                            <button className="btn1 btn-primary me-3" onClick={read}>Read More</button>
                            <Link to="/course" className="btn2 btn-outline-light">Explore Courses</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="hero1  d-flex align-items-center" style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
                <div className="container ">
                    <div className="display-4 g-4 row text-center">
                        <div className="col-lg-4  item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}>
                            <img src="/images/serviceicon1.png" alt="Service 1" className="img-fluid mb-3" />
                            <h3 className="text-white">Best Education</h3>
                            <p className="text-white">Description for service one goes here. Brief and engaging summary of what this service offers.</p>
                        </div>

                        <div className="col-lg-4   item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}> 
                            <img src="/images/serviceicon2.png" alt="Service 1" className="img-fluid mb-3" />
                            <h3 className="text-white">Best Teachers</h3>
                            <p className="text-white">Description for service two goes here. Brief and engaging summary of what this service offers.</p>
                        </div>

                        <div className="col-lg-4  item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}>
                            <img src="/images/serviceicon3.png" alt="Service 1" className="img-fluid mb-3" />                            
                            <h3 className="text-white">Best Students</h3>
                            <p className="text-white">Description for service three goes here. Brief and engaging summary of what this service offers.</p>
                        </div>

                        <div className="col-lg-4  item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}>
                            <img src="/images/serviceicon1.png" alt="Service 1" className="img-fluid mb-3" />                            
                            <h3 className="text-white">Online Meeting</h3>
                            <p className="text-white">Description for service three goes here. Brief and engaging summary of what this service offers.</p>
                        </div>
                        
                        <div className="col-lg-4  item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}>
                            <img src="/images/serviceicon3.png" alt="Service 1" className="img-fluid mb-3" />                            
                            <h3 className="text-white">Best Networking</h3>
                            <p className="text-white">Description for service three goes here. Brief and engaging summary of what this service offers.</p>
                        </div>
                        
                        <div className="col-lg-4  item" style={{backgroundImage: 'url(/images/servicebg.jpg)'}}>
                            <img src="/images/serviceicon2.png" alt="Service 1" className="img-fluid mb-3" />                            
                            <h3 className="text-white">Upcoming Meetings</h3>
                            <p className="text-white">Description for service three goes here. Brief and engaging summary of what this service offers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
