import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Coursesdetails.css";

const CourseDetails = () => {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get("https://learner-fawn.vercel.app/data/db.json")
      .then((response) => {
        const allCourses = response.data.images;  
        const selectedCourse = allCourses.find(
          (item) => item.id.toString() === id
        );
        setCourse(selectedCourse);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!course) {
    return <h2 className="text-center mt-5">Loading course details...</h2>;
  }

  return (
    <div className="course-details-page">
      <div className="course-banner text-center">
        <h1>{course.course}</h1>
      </div>

      <div className="course-container container">
        <div className="row">
          <div className="col-md-5 text-center">
            <img 
              src={course.image} 
              alt={course.course} 
              className="img-fluid course-img mb-4" 
            />
          </div>

          <div className="col-md-7 course-info">
            <h2>Price: {course.price}</h2>
            <p className="course-description">{course.description}</p>

            <h3>Course Details</h3>
            <p>{course.details}</p>

            <Link 
              to={`/book-course/${id}`} 
              className="btn btn-primary mt-3 coursebtn"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
