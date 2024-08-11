import React from "react";
import { courses } from "../components/assets/data/dummydata";
import { FaBook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Courses = () => {
  return (
    <>
      <section className='courses bg-[#F3F4F8] py-16'>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-blue-900'>
              Find The Right <br />
              Online Course For You
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.map((item) => (
              <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
                  <img src={item.cover} alt={item.title} className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <FaBook />
                      <span className='text-[14px] ml-2'>{item.lessons} lessons</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'>{item.rating}({item.reviews})</span>
                    </div>
                  </div>
                  <h3 className='text-blue-900 my-4 md:font-bold font-medium h-10'>{item.title}</h3>
                </div>
                <div className='flex items-center justify-between border-t border-gray-200 p-3'>
                  <span className='text-sm text-primary'>${item.price}</span>
                  <NavLink to={`/course/${item.id}`} className='text-[14px] ml-2 flex items-center'>
                    Know Details <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;