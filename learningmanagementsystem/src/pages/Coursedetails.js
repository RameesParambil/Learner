import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import './Coursesdetails.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';



const CourseDetails = () => {
  const { id } = useParams(); 
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/images/${id}`)

      .then(response => setData(response.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="course-details-page">
      
      <div className="course-banner text-center">
          <h1>{data.course}</h1>
      </div>
      <div className="course-container container">
        <div className='row'>
          <div className="col-md-5 text-center">
            <img src={data.image} alt={data.course} className="img-fluid course-img mb-4" />
          </div>
          <div  className="col-md-7 course-info"> 
            <h2>Price: {data.price}</h2>
            <p className="course-description">{data.description}</p>
            <h3>Course Details</h3>
            <p>{data.details}</p>
            <Link to={`/book-course/${id}`} className="btn btn-primary mt-3 coursebtn">Enroll Now</Link>
          </div>
        </div>
      </div>
      
         
        </div>
      
    
  );
};

export default CourseDetails;
