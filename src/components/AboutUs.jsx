import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Footer from './Footer';
import Nav from './Nav';

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Nav/>
      <section className="aboutus h-[150px] pt-[40px] w-full bg-gray-100 flex justify-evenly items-center flex-col">
        <h3 className="text-[30px] font-bold text-[#fca817] text-shadow-sm">ABOUT US</h3>
        <h1 className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[47%] text-[20px] sm:text-[25px] md:text-[30px] text-center leading-[1.1] text-[#1f2026] font-sans">
          WE SERVE THE BEST TO ENCOURAGE OUR CLIENTS & OUR WILL
        </h1>
      </section>

      <section className="years relative flex flex-col md:flex-row h-auto   md:h-[650px] w-full justify-center bg-gray-100 pt-[20px]">
        <div className="pico rounded ml-[10px] relative  h-[700px] sm:h-[400px] md:h-[95%] w-[95%]  md:w-[44%]  mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="2000">
          <div className="pici  relative top-[0%] sm:top-[5%] h-[35%] sm:h-[70%] w-[95%]  sm:w-[45%]  md:w-[32%] rounded-xl overflow-hidden float-left ml-[14px] sm:ml-[0px]">
            <img src="./img/imgg.jpg" alt="" className="style2  " />
          </div>

          <div className="pici pico1 rounded-xl relative top-[2%] sm:top-[5%]   left-[3%] z-10 h-[35%] w-[95%] md:h-[40%] sm:h-[70%] sm:w-[35%] md:w-[43%] lg:w-[40%] lg:h-[40%]">
            <img src="./img/experience.jpg" alt="" className="style2 " />
          </div>
          <div className="iconi rounded-xl relative top-[92%] md:top-[80%] left-[67%] md:left-[0%] hidden sm:block sm:h-[20%] sm:w-[15%] md:w-[30%]  bg-[#fca817] cursor-pointer">
            <i className="fa-solid fa-play absolute left-[40%] md:left-[38%] top-[25%] text-[35px] md:text-[45px] lg:text-[50px] transition-all duration-1000"></i>
          </div>
          <div className="pici left-[3%] sm:left-[3%] md:left-[3%] pico2 rounded-xl relative top-[4%] sm:mt-[0px] sm:top-[10%] h-[35%] w-[95%] sm:h-[50%] sm:w-[80%] md:w-[60%] md:h-[50%] lg:w-[60%] lg:h-[50%] ">
            <img src="./img/visionstrategy.jpg" alt="" className="style2 h-full w-full" />
          </div>

          <img src="./img/thm-shape-1.png" alt="" className="thm absolute top-0 right-0 w-[100px] md:w-[250px] animate-[thm_2s_linear_infinite_alternate] " />
          <h1 className="absolute mt-[-35px] sm:mt-[0px]  md:mr-[-6%] lg:mr-[0%] sm:text-black text-white  text-[20px] md:text-[25px]  rotate-90">5 YEARS HISTORY</h1>
        </div>

        <div className="besti m-auto md:ml-[10px] mt-[10%] md:mt-[0%] relative h-[400px] md:h-[95%] w-[90%] md:w-[44%] flex justify-evenly items-center flex-col" data-aos="fade-left" data-aos-duration="2000">
          <h1 className="absolute w-full  text-center top-[3%] sm:top-[10%] md:top-[12%] text-[29px] sm:text-[30px] md:text-[30px] lg:text-[33px] font-semibold leading-[1] sm:leading-[1.2]  ">
            Best marketing agency service company online today!
          </h1>
          <h4 className="absolute top-[32%] sm:top-[30%]  md:top-[32%] text-[14px] sm:text-[16px] md:text-[17px] font-semibold leading-[1.1] sm:leading-[1.2] text-gray-600 text-center ">
            “Innovative energy solutions, high-quality equipment, and unparalleled support for sustainable power.”
          </h4>
          <p className="absolute top-[48%] sm:top-[40%] md:top-[47%] text-[14px] sm:text-[16px] md:text-[16px] text-[#3e3e3f] leading-[1.2] sm:leading-[1.8] text-center lg:text-justify">
            As a leading power tech company, we specialize in providing innovative energy solutions and high-quality equipment to meet diverse industry needs. Our commitment to excellence ensures reliable, efficient, and sustainable power systems. Partner with us for cutting-edge technology and unparalleled support in powering your future.
          </p>

          <div className="flex justify-center md:justify-start absolute top-[87%] sm:top-[76%]  md:top-[90%] lg:top-[80%] left-[2%] md:left-[2%] space-x-2  w-auto">
            <img src="./img/imgg.jpg" alt="" className="h-[40px] absolute left-[2%] w-[40px] sm:h-[50px] sm:w-[50px] shadow-lg rounded-full" />
            <img src="./img/imgg2.jpg" alt="" className="h-[40px] absolute left-[4%] w-[40px] sm:h-[50px] sm:w-[50px] shadow-lg rounded-full" />
            <img src="./img/It2.jpg" alt="" className="h-[40px] w-[40px] absolute left-[10%] sm:h-[50px] sm:w-[50px] shadow-lg rounded-full" />
            <img src="./img/knowledge.webp" alt="" className="h-[40px] w-[40px] absolute left-[14%] sm:h-[50px] sm:w-[50px] shadow-lg rounded-full" />
            <img src="./img/vision.jpg" alt="" className="h-[40px] w-[40px] sm:h-[50px]   sm:w-[50px] shadow-lg rounded-full" />
          </div>

          <div className="absolute top-[87%] sm:top-[77%] md:top-[90%] lg:top-[80%] left-[23%] sm:left-[13%] md:left-[24%] lg:left-[15%] text-left">
            <h2 className="text-[14px] sm:text-[16px]">Power-Tech</h2>
            <h3 className="font-bold text-[12px] sm:text-[15px] text-[#686767]">Salar Butt & Bilal</h3>
          </div>
        </div>
      </section>

      <section className="portfolio flex flex-col md:flex-col  lg:flex-row h-[1100px] md:h-[970px] lg:h-[1000px] w-full bg-gray-100  overflow-hidden" data-aos="fade-right" data-aos-duration="2000">
        <div className="future relative h-[600px] lg:h-full w-full lg:w-[57%] ">
          <h2 className="absolute top-[0%] md:top-[3%] left-[10%] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[18px] font-semibold text-[#fca817]">OUR PORTFOLIO</h2>
          <h1 className="absolute w-full top-[5%] md:top-[9%] md:left-0 text-center lg:left-[10%] text-[20px] sm:text-[25px] lg:text-[25px] font-black leading-[1.3]">
            WE BUILD FUTURE READY DIGITAL WEB<br />STUDIO AND PLATFORMS.
          </h1>

          <div className="dude1 relative h-[200px]  sm:h-[230px] md:h-[300px] lg:h-[46%] w-[83%] left-[10%] top-[20%] md:top-[22%] lg:top-[17%] overflow-hidden rounded-xl">
            <img src="./img/Itservices.jpg" alt="" className="ome h-full w-full transition-transform " />
         
          </div>
          <div className="dude1 dude2  relative  h-[200px] sm:h-[230px] md:h-[200px] lg:h-[23%] w-[83%] md:w-[40%] lg:w-[40%] left-[9%] top-[22%] md:top-[25%] lg:top-[20%] overflow-hidden rounded-xl">
            <img src="./img/success.jpg" alt="" className="ome h-full w-full transition-transform duration-1000 filter-grayscale" />
           
          </div>
          <div className="dude1 dude3  relative h-[200px] sm:h-[230px] lg:h-[23%] w-[83%] md:h-[33%]  md:w-[40%] 
          lg:w-[40%] left-[10%] md:left-[54%] lg:left-[55%] top-[24%]  md:top-[-8%] lg:top-[-3%] overflow-hidden rounded-xl">
            <img src="./img/vision.jpg" alt="" className="ome h-full w-full transition-transform duration-1000 filter-grayscale" />
            
          </div>

        </div>

        <div className=" flex justify-around  flex-col  md:justify-around   lg:ml-[0px] md:ml-[55px] lg:justify-between items-center sm:flex-row md:flex-row lg:flex-col h-[70%]  w-[85%] 
        sm:h-[90%] sm:w-[90%] md:w-[90%] md:h-[210px] m-auto mt-[150px] sm:mt-[250px] md:mt-[70px] lg:mt-[80px] lg:h-[80%] lg:w-[35%] overflow-hidden">
          <div className="dude1 relative h-[48%] w-[100%] sm:h-[100%] md:h-[100%] lg:h-[48%] sm:w-[43%] md:w-[45%] lg:w-full overflow-hidden rounded-xl">
            <img src="./img/hardware.webp" alt="" className="ome h-full w-full transition-transform duration-1000 filter-grayscale" />
           
          </div>
          <div className="dude1  relative h-[48%] w-[100%] sm:h-[100%]  md:h-[100%]  lg:h-[48%] sm:w-[43%] md:w-[45%] lg:w-full overflow-hidden rounded-xl">
            <img src="./img/usp2.webp" alt="" className="ome h-full w-full transition-transform duration-1000 filter-grayscale" />
            
          </div>
        </div>
        


    
      </section>
<Footer/>
    </>
  );
}

export default AboutUs;
