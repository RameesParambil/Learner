import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import './MyProfile.css';
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./ProfileContext"; 

function MyProfile(){
    const { profile, setProfile , enquiry , setEnquiry , handleLogout } = useContext(ProfileContext);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/booking')
        .then(response => {
            const bookings = response.data; 
            if(bookings.length > 0){
                const latestBooking = bookings[bookings.length -1 ];
                setProfile(latestBooking);
                setEnquiry(latestBooking.enquiry);
            }
              
        })
        .catch(error => console.log(error));

    }, [])

    const handleEnquiryChange = (e) => {
        setEnquiry(e.target.value);
    }

    const handleSaveEnquiry = () => {
        if (profile) {
            const updatedProfile = {...profile, enquiry};
            axios.put(`http://localhost:8000/booking/${profile.id}`, updatedProfile)
            .then(response => {
                setProfile(response.data);
                alert("Enquiry updated successfully");
                navigate('/');
            })
            .catch(error => console.log(error))
        }
    };
 
    return(
        <div className="profile-container vh-100 ">
            <h2>My Profile</h2>

                <div className="profile-details ">
                    <p><strong>Name:</strong>{profile.name}</p>
                    <p><strong>Email:</strong>{profile.email}</p>
                    <p><strong>Phone Number:</strong>{profile.phone}</p>
                    <p><strong>Course:</strong>{profile.course}</p>
                    <p><strong>Price:</strong>{profile.price}</p>
                    <p><strong>Current Status:</strong>{profile.status}</p>

                    <div className="enquiry-edit">
                        <label htmlFor="enquiry"><strong>Enquiry:</strong> </label> 
                        <textarea id="enquiry" 
                        value={enquiry} 
                        onChange={handleEnquiryChange} rows="6" cols="50"/>
                    </div>
                    <button className="btn btn-primary" onClick={handleSaveEnquiry} >Save Changes</button>
                    
                </div>

        </div>
    )
}
export default MyProfile;