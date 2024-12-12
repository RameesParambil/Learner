import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import './Bookingdetails.css';

function Bookingdetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/booking')

    .then(response => {
      setData(response.data);
    })
    .catch(error => console.log(error) );
  },[])

  const {id} = useParams();

  const handleStatusChange = (id, newStatus) =>{
    const updatedBooking = data.find(d => d.id === id);

    if(updatedBooking){
      const updatedData = data.map(d=> d.id === id? {...d, status:newStatus}: d );
      setData(updatedData);

      const updatedBookingData = {...updatedBooking, status: newStatus};

      axios.put(`http://localhost:8000/booking/${id}`, updatedBookingData)
      .then(response =>{
        console.log('Status Updated Successfully:', response.data )
      })
      .catch(error => console.log(error))
    }

  }
   
  return (
    <div className='bookingdetails d-flex justify-content-center align-items-center ' style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
      <div className='container3 '>
      <div className="table-responsive bookingtable">
        <h2 className='text-center mb-4'>Booking Details</h2>
        <table className='table  table-hover '>
          <thead className='table-dark'>
            <tr>
              <th>ID</th> 
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>COURSE</th>
              <th>PRICE</th>
              <th>ENQUIRY</th>
              <th>STATUS</th>
              <th>ACTION</th>

            </tr>
          </thead>
          <tbody>
                {
                    data.map((d,i) => {
                        return(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.course}</td>
                                <td>{d.price}</td>
                                <td className='enquiry1'>{d.enquiry}</td>
                                <td>{d.status}</td>

                                <td className='action'>
                                    <button  className='btn btn-success btn-sm' onClick={() => handleStatusChange(d.id, "Approved") }>Approved</button>
                                    <button  className='btn btn-info btn-sm' onClick={() => handleStatusChange(d.id, "Waiting")}>Waiting</button>
                                    <button  className='btn btn-dark btn-sm' onClick={() => handleStatusChange(d.id, "Pending")} >Pending</button>
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

export default Bookingdetails;


// approved waiting pending

