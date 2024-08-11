import React from "react"

export const Footer = () => {
  return (
    <>
      {<section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-blue flex md:flex-col ashen-primary mt-10 relative z-10'>
        <div className='left w-[100%] md:w-full p-7'>
          <h1 className='text-3xl font-semibold leading-tight'>
          Learning is like an adventure; discover something new every day!
<br /> 
          </h1>
        </div>
      </section> }
      {/* {<footer className='bg-[#e5e9f0] py-10 pt-32 -mt-38'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-5' />
            <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>
        </div>
      </footer> } */}
    </>
  )
}
export default Footer;