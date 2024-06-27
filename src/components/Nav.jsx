import React,{useState} from 'react'
import { FaListUl } from "react-icons/fa6"; // Corrected icon import
import { RxCross2 } from "react-icons/rx"; // Corrected icon import
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const showsidebar = () => {
        setIsSidebarOpen(true);
      };
      const hidesidebar = () => {
        setIsSidebarOpen(false);
      };
  return (
    <>
            <header className="bg-blue-500 fixed w-full headerr body-font top-0">
            <div className="container mx-auto flex justify-between  lg:flex-wrap p-4 flex-row items-center ">
  <Link to="/"> <p className="flex title-font font-medium items-center text-white  mb-4 md:mb-0" >
    <img src="./img/logo.png" alt="logo" className='h-[50px] w-[50px]' />
      <span className="md:ml-2 text-xl xl:text-2xl">POWER TECH FUSION</span>
    </p></Link> 

    <nav className=" flex items-center justify-center  ">
     <Link to="/"> <p className="mr-5 namee oxy hideOnMobile  md:text-lg lg:text-xl xl:text-xl easyy">Home</p></Link>
     <Link to="/aboutus">  <p className="mr-5 namee hideOnMobile text-xl " >About</p></Link>
     <Link to="/services"> <p className="mr-5 namee hideOnMobile text-xl " >Services</p></Link>
      <FaListUl onClick={showsidebar} className="text-white text-2xl anchor hover:cursor-pointer" />
    </nav>
    <HashLink smooth to="#contact" className="text-center w-[12%]  remove3">   <button className="inline-flex items-center md:m-auto  bg-gray-100 border-0 py-1 px-3 focus:outline-none overflow-hidden hideOnMobile hover:bg-gray-200 rounded text-xl md:text-xl text-md mt-4 md:mt-0 with fixerr">
     <p className='w-full'> Contact Us</p>
    </button></HashLink>

  </div>
</header>

      {/* Sidebar for mobile */}
      <div className={`sidebarr ${isSidebarOpen ? 'open' : ''}`}>
        <RxCross2 onClick={hidesidebar} className='text-3xl text-red-500 hover:cursor-pointer ml-5 mt-5' />
        <Link to="/"><a className="mr-5  hover:text-black easyy" onClick={hidesidebar}>Home</a></Link>
        <Link to="/aboutus"><a className="mr-5 easyy hover:text-black md-text-lg lg-text-xl"  onClick={hidesidebar}>About</a></Link>
        <Link to="/services"><a className="mr-5 easyy hover:text-black md-text-lg lg-text-xl" onClick={hidesidebar}>Services</a></Link>
  

      </div>
    </>
  )
}

export default Nav
