import React from "react"
import logImg from "../assets/images/logo.png"
import { BsApple, BsGooglePlay } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <>
 
      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-15'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-5' />
            <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>

         
        </div>
      </footer>
    </>
  )
}