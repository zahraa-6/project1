
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateCourse = ({ addCourse }) => {
  const [newCourse, setNewCourse] = useState({
    id: Date.now(),
    title: '',
    lessons: '',
    price: '',
    instructor: '',
    location: '',
    phone: '',
    cover: '', 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    navigate('/courses');
  };

  return (
    <section className="create-course bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="container bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={newCourse.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Number of Lessons</label>
            <input
              type="text"
              name="lessons"
              placeholder="Number of Lessons"
              value={newCourse.lessons}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newCourse.price}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Instructor Name</label>
            <input
              type="text"
              name="instructor"
              placeholder="Instructor Name"
              value={newCourse.instructor}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newCourse.location}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={newCourse.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
            <input
              type="text"
              name="cover"
              placeholder="Cover Image URL"
              value={newCourse.cover}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Course
          </button>
        </form>
      </div>
    </section>
  );
};