import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import './Course.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';

function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://learner-fawn.vercel.app/data/db.json')
    .then(response => setData(response.data.images))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div id='course' className='course align-items-center' style={{backgroundImage: 'url(/images/img-school-1-min.jpg)'}}>
        <div className='container1'>
          <div className='row g-4'>
            <h1 className="display-4 head text-white">Our Online Courses</h1>

            {data.map((course) => (
              <div key={course.id} className='col-lg-4 col-sm-6'>
                <div className='card-effect'>
                  <img src={course.image} alt="" />
                  <h1>{course.price}</h1>
                  <hr />
                  <h5 className='mt-4 mb-3'>{course.course}</h5>
                  <p>{course.description}</p>
                  <Link to={`/course-details/${course.id}`} className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
