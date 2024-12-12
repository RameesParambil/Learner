import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Registerdetails.css';


function Registerdetails() {
    const [data, setData] = useState([]);
    const [values, setValues] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/getusers")

        .then(response => setData(response.data))
        .catch(error => console.log(error));
    },[])

    const handleInputChange = (e, userId ) => {
        const {name, value} =  e.target;
        setData(data.map(user => user.id === userId ? {...user, [name]: value } : user));
        setValues({...values, [name] : value});
    }
   

    const handleUpdate = (userId) => {
        const updatedUser = data.find(user => user.id === userId);
        
        axios.put(`http://127.0.0.1:8000/api/userupdate/${userId}/`, updatedUser) 
        .then(response => {
            setData(data.map(user => user.id === userId? response.data : user));
            alert("User updated successfully");
        })
        .catch(error => console.log(error))

        

};


const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
        axios.delete(`http://127.0.0.1:8000/api/userdelete/${userId}/`)
        .then(response => {
            setData(data.filter(user => user.id !== userId));
            alert("User deleted successfully");
        })
        .catch(error => console.log(error));
    }
}

  return (
    <div className='registerdetails d-flex justify-content-center align-items-center vh-100' style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
       <div className='container2 w-90'>
        <div className='table-responsive'>
            <h2 className='text-center mb-4'>Registered Users</h2>
            <table className='table  table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => {
                            return(
                                <tr key={user.id}>

                                    <td>{user.id}</td>
                                    <td>
                                        <input
                                            type='text'
                                            name='UserName'
                                            value={user.UserName} 
                                            onChange={(e) => handleInputChange(e, user.id)}
                                        />
                                    </td>
                                    <td> 
                                        <input
                                        type='email'
                                        name='UserEmail'
                                         value={user.UserEmail}
                                         onChange={(e) => handleInputChange(e, user.id)}
                                          /> 
                                    </td>
                                     
                                        <input
                                        type='password'
                                        name='UserPassword'
                                         value={user.UserPassword}
                                         onChange={(e) => handleInputChange(e, user.id)}
                                          />
                                    
                                    <td>
                                        <button  className='btn btn-warning btn-sm me-2' onClick={() => handleUpdate(user.id)} >Update</button>
                                        <button className='btn btn-danger btn-sm' onClick={() => handleDelete (user.id)}>Delete</button>


                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
       </div>
    </div>
  )
} 

export default Registerdetails;