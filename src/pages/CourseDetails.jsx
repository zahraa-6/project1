
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className='course-details p-4'>
      <h2 className='text-3xl font-bold mb-4'>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> ${course.price}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Phone:</strong> <a href={`tel:${course.phone}`}>{course.phone}</a></p>
      <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${course.phone}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
    </div>
  );
};

export default CourseDetails;