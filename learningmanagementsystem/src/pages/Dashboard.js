import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboard d-flex w-100 justify-content-center align-items-center  bg-light vh-100'  style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
       <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-6'>
                    <div className='card-effect'>
                        <h1 className='card-title'>Register details</h1>
                        <p className='card-text'>View and manage registered users.</p>
                        <Link to='/register-details' className='btn btn-info'>View Details</Link>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                    <div className='card-effect'>
                        <h1 className='card-title'>Booking details</h1>
                        <p className='card-text'>Check recent bookings and appointments.</p>
                        <Link to='/booking-details'  className='btn btn-info'>View Details</Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Dashboard;
