import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { FaFacebookF ,FaTwitter, FaInstagram } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Footer(){
    return(
        <div>
            <footer>
                <div className="footer-bottom py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 bottom">
                                © 2024 copyright all right reserved
                            </div>
                            <div className="col-6">
                                <div className="social-icons">
                                    <li className="icons">
                                        <Link to="#" style={{color:"#fff"}}><FaFacebookF /></Link>
                                    </li>
                                    <li className="icons"> 
                                        <Link to="#" style={{color:"#fff"}}><FaTwitter /></Link>
                                    </li>
                                    <li className="icons"> 
                                        <Link to="#" style={{color:"#fff"}}><FaInstagram /></Link>
                                    </li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}
export default  Footer;
