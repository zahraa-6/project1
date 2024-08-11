import React, { useState } from "react";
import heroImg from "../components/assets/images/image.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FiSearch } from "react-icons/fi";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import { Blog } from "./Blog";
import Login from "./Login";
import { courses } from "../components/assets/data/dummydata"

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      <Blog />
      
    </>
  );
};

export const HomeContent = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState([]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      courses.filter((w) => w.title.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8)
    );
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e);
  };

  const handleSearchResultClick = (course) => {
    // Handle the click event here
    // For example, you could navigate to a course details page
    console.log(`Course clicked: ${course.title}`);
    // Add your logic here to handle the click event
  };

  return (
    <section className="  py-10 h-[92vh]  bg-gradient-to-r from-sky-100 to-indigo-400  ">

      <div className="container  ">
        <div className="flex items-center justify-center md:flex-col">
          <div className="left w-1/2 text-blue-700 md:w-full ">
            <h1 className="text-4xl leading-tight text-blue-900 font-semibold ">
              summer course <br /> Platform
            </h1>
            <h3 className="text-lg mt-2 font-semibold">Welcome to the complete guide to entertainment tips for kids</h3>
            <span className="text-[12px]">
              Don't miss the opportunity to discover the best institutes for your children this summer!
            </span>

            <div className="relative text-blue-700 focus-within:text-gray-400 mt-5">
              <input
                type="search"
                className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none "
                placeholder="Search..."
                onChange={handleInputChange}
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <FiSearch />
                </button>
              </span>
              {activeSearch.length > 0 && (
              <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                {activeSearch.map((s) => (
                  <span key={s.id} onClick={() => handleSearchResultClick(s)}>
                    {s.title}
                  </span>
                ))}
              </div>
            )}

            </div>
           
            <span className="text-[14px]">You`re guaranteed to find something thats right for you.</span>
          </div>
          <div className=" left-20  w-1/2 c md:w-full relative " >
            <div className="images relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]   ">
            <div className='images relative'>
                <img src={heroImgback} alt='' className=' absolute top-10 left-1  w-150 md:left-10' />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='h-full w-full object-contain  z-20 relative' />
                </div>
              </div>
            </div>
            <div className="content">
              {/* Add content here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home ;