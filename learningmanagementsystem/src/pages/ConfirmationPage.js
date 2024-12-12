import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';  

function ConfirmationPage() {
    return (
        <div className="confirmation-page vh-100 d-flex align-items-center"  >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <h1 className="display-4">Booking Confirmed!</h1>
                        <p className="lead">Thank you for booking with us. Your course has been successfully reserved.</p>
                        <p>If you have any questions, please contact us.</p>
                        <Link to="/ " className="btn btn-primary">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPage;
