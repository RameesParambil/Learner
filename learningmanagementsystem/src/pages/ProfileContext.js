import React, {Children, createContext, useState} from "react";

export const ProfileContext = React.createContext();

export const ProfileProvider = ({ children}) => {
    const [profile, setProfile] = useState('');
    const [enquiry, setEnquiry] = useState('');

    const handleLogout = () =>{
        setProfile('')
        setEnquiry(''); 
    };

    return(
        <ProfileContext.Provider value={{profile, setProfile, enquiry, setEnquiry, handleLogout}}>
            {children}
        </ProfileContext.Provider>
    )
}

