import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";   
function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="text-gray-600 body-font movee" id="contact">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="./img/logo.png" alt="" className='h-[50px] w-[50px]' />
        <span className="ml-3 text-2xl text-white">Power Tech</span>
      </a>
      <p className="mt-2 text-md text-gray-100">We serve our best to establish a family relation with our clients</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-5 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="w-1/2 lg:w-1/4 md:w-1/2  px-4 ">
        <h2 className=" title-font font-medium underline text-white tracking-widest text-md sm:text-xl mb-3 text-start">CATEGORIES</h2>
        <nav className="list-none mb-10 text-start text-lg sm:text-lg">
          <li>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer hover:ml-2 eeasy text-start">IT Services</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer hover:ml-2 eeasy text-start">Hardware/Software</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer hover:ml-2 eeasy text-start">Installation</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer hover:ml-2 eeasy text-start">Repaiting</a>
          </li>
        </nav>
      </div>
      <div className="w-1/2 lg:w-1/4 md:w-1/2  px-4">
        <h2 className="title-font font-medium text-white underline  tracking-widest text-md sm:text-xl mb-3 text-start ">SocialMedia </h2>
        <nav className="list-none mb-10 text-md sm:text-lg">
          <li className='w-1/2 flex justify-evenly items-center  hover:ml-2 eeasy text-start'>
          <FaFacebookSquare className='text-blue-400 hover:text-blue-300 cursor-pointer text-md '/>  <a className="text-white hover:text-gray-200 hover:cursor-pointer " target='_blank'  >Facebook</a>
          </li>
          <li className='w-1/2 flex justify-evenly items-center  hover:ml-2 eeasy text-start'>
          <FaInstagram className='text-red-500 hover:text-red-400 cursor-pointer text-lg '/>  <a className="text-white hover:text-gray-200 hover:cursor-pointer " target='_blank'>Instagram</a>
          </li>
          <li className='w-1/2 flex justify-evenly items-center  hover:ml-2 eeasy text-start'>
          <FaTwitter className='text-blue-400 hover:text-blue-300 cursor-pointer text-md'/>  <a className="text-white hover:text-gray-200 hover:cursor-pointer" href='https://x.com/PowerTechFusion' target='_blank'>Twitter</a>
          </li>
          <li className='w-1/2 flex justify-evenly items-center  hover:ml-2 eeasy text-start'>
          <CiLinkedin className='text-blue-400 hover:text-blue-300 cursor-pointer text-md'/>  <a className="text-white hover:text-gray-200 hover:cursor-pointer  " href='https://www.linkedin.com/in/powertech-fusion-6b0526316/' target='_blank'>LinkedIn</a>
          </li>
        </nav>
      </div>
      <div className="w-1/2 lg:w-1/4 md:w-1/2  px-0">
        <h2 className="title-font font-medium text-white underline  text-md text-start sm:text-xl tracking-widest  mb-3">Gmail</h2>
        <nav className="list-none mb-10 text-[13px] sm:text-lg md:text-md ">
          <li className='hover:ml-2 eeasy text-start'>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer ">info@powertechfusion.online</a>
          </li>
          <li className='hover:ml-2 eeasy text-start'>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer">salarbutt321@gmail.com</a>
          </li>
          <li className='hover:ml-2 eeasy text-start'>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer">hafizbilal5578@gmail.com</a>
          </li>

        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 px-8 sm:px-2  w-1/2 md:px-8 lg:px-8">
        <h2 className="title-font font-medium text-white underline  tracking-widest text-md sm:text-xl mb-3 text-start ">Contact#</h2>
        <nav className="list-none   mb-10 text-sm sm:text-lg md:text-md">
          <li className='hover:ml-2 eeasy text-start'>
            
            <a className="text-white hover:text-gray-200 hover:cursor-pointer"  
            href="https://wa.me/+923236379199"  
            >+92323-6379199</a>
          </li>
          <li className='hover:ml-2 eeasy text-start'>
            <a className="text-white hover:text-gray-200 hover:cursor-pointer" 
            href="https://wa.me/+923258061035"  
            >+92325-8061035</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-blue-600 ">
    <div className="container mx-auto py-1 px-1 sm:py-4 sm:px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-lg text-center sm:text-left">© 2024 PowerTechFusion
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1 underline hover:no-underline hover:cursor-pointer" target="_blank">@Power-Tech-Fusion</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className=" text-white hover:text-gray-200 cursor-pointer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-blue-400 hover:text-blue-200 cursor-pointer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-red-500 hover:text-red-400 cursor-pointer">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3  text-blue-400 hover:text-white cursor-pointer">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
