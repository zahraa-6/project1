import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../components/assets/data/dummydata';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const whatsappLink = `https://wa.me/${course.phone}?text=Hello%20${course.instructor},%20I%20am%20interested%20in%20your%20course%20${course.title}`;

  return (
    <div className='w-4/5 m-auto py-16'>
      <h1 className='text-3xl font-semibold text-blue-900'>{course.title}</h1>
      <p className='text-xl my-4'>Instructor: {course.instructor}</p>
      <p className='text-xl my-4'>Price: ${course.price}</p>
      <p className='text-xl my-4'>Location: {course.location}</p>
      <p className='text-xl my-4'>
        Contact Instructor: 
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">
          WhatsApp
        </a>
      </p>
    </div>
  );
};

export default CourseDetails;