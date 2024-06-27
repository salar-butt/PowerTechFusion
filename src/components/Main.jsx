import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaListUl } from "react-icons/fa6"; // Corrected icon import
import { RxCross2 } from "react-icons/rx"; // Corrected icon import
import { RiGraduationCapLine } from "react-icons/ri";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { MdOutlineHighQuality } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LiaSellcast } from "react-icons/lia";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Loader from "./Loader";
import AOS from "aos";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Your EmailJs ServiceId, templateId and publicKey
  function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceId = "service_bw2oouu";
    const templateId = "template_bzq26lt";
    const publicKey = "TSccqKk8H1Hwmxbv4";

    emailjs.send(serviceId, templateId, params, publicKey).then(
      (result) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(result.text, "ok");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have sent an email!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  const initialProjects = [
    {
      id: 1,
      title: "IT Services",
      category: "CATEGORY",
      description:
        "Revolutionize your business with our cutting-edge IT services. From expert support to innovative solutions, we ensure your systems run smoothly and efficiently, empowering your success in the digital age.",
      likeCount: 1000,
      isLiked: false,
      comments: ["IT services are The best provided by Power-Tech-Fusion"],
      className: "scaleimg",
    },
    {
      id: 2,
      title: "Camera's Services",
      category: "CATEGORY",
      description:
        "Expert camera servicing ensures optimal performance, reliability, and enhanced security for your surveillance systems. Trust our professional team to maintain and repair your cameras for continuous, high-quality monitoring and peace of mind.",
      likeCount: 1000,
      isLiked: false,
      comments: [
        "Teamworker's are cooperative",
        "Camera repairing are appreciable",
      ],
      className: "scale2img",
    },
    {
      id: 3,
      title: "Hardware Services",
      category: "CATEGORY",
      description:
        "Transform your business with our premier hardware and software services. Our expert team provides seamless integration, cutting-edge solutions, and unmatched reliability to ensure your technology operates at peak performance.",
      likeCount: 1000,
      isLiked: false,
      comments: [],
      className: "scale3img",
      comments: ["Must be rewarded", "Hardware services are appreciable"],
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  const toggleLike = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? {
              ...project,
              likeCount: project.isLiked
                ? project.likeCount - 1
                : project.likeCount + 1,
              isLiked: !project.isLiked,
            }
          : project
      )
    );
  };

  const toggleCommentSection = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, showCommentSection: !project.showCommentSection }
          : project
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, comment: value } : project
      )
    );
  };

  const handleCommentSubmit = (e, id) => {
    e.preventDefault();
    setProjects(
      projects.map((project) =>
        project.id === id && project.comment.trim()
          ? {
              ...project,
              comments: [...project.comments, project.comment],
              comment: "",
            }
          : project
      )
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const showsidebar = () => {
    setIsSidebarOpen(true);
  };
  const hidesidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/*---------------- navbar */}
      <header className="bg-blue-500 fixed w-full headerr body-font top-0">
        <div className="container mx-auto flex justify-between  lg:flex-wrap p-5 flex-row items-center movingtoo">
          <HashLink
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            smooth to="#home"
          >
            <img src="./img/logo.png" alt="" className="h-[50px] w-[50px]" />
            <span className="md:ml-2 text-xl xl:text-2xl">
              POWER TECH FUSION
            </span>
          </HashLink>
          <nav className=" flex items-center justify-center ">
            <HashLink
              className="mr-5 namee hideOnMobile md:text-lg lg:text-xl xl:text-xl easyy"
              smooth
              to="#home"
            >
              Home
            </HashLink>
            <HashLink
              className="mr-5 namee hideOnMobile text-xl "
              smooth
              to="#about"
            >
              About
            </HashLink>
            <HashLink
              className="mr-5 namee hideOnMobile text-xl "
              smooth
              to="#services"
            >
              Services
            </HashLink>
            <HashLink
              className="mr-5 namee hideOnMobile text-xl "
              smooth
              to="#clients"
            >
              Clients
            </HashLink>
            <HashLink
              className="mr-5 namee hideOnMobile text-xl "
              smooth
              to="#support"
            >
              Support
            </HashLink>
            <FaListUl
              onClick={showsidebar}
              className="text-white text-2xl anchor hover:cursor-pointer"
            />
          </nav>
          <HashLink smooth to="#contact" className="text-center w-[12%]  removee">
            <button className="inline-flex items-center md:m-auto bg-gray-100 overflow-hidden border-0 py-1 px-3 focus:outline-none hideOnMobile hover:bg-gray-200 rounded w-full text-xl md:text-xl text-md mt-4 md:mt-0 with">
              <p className="w-full" >
              Contact Us
              </p>
            </button>
          </HashLink>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div className={`sidebarr ${isSidebarOpen ? "open" : ""}`}>
        <RxCross2
          onClick={hidesidebar}
          className="text-3xl text-red-500 hover:cursor-pointer ml-5 mt-5"
        />
        <HashLink
          className="mr-5 namee easyy"
          smooth
          to="#home"
          onClick={hidesidebar}
        >
          Home
        </HashLink>
        <HashLink
          className="mr-5 namee md-text-lg lg-text-xl"
          smooth
          to="#about"
          onClick={hidesidebar}
        >
          About
        </HashLink>
        <HashLink
          className="mr-5 namee md-text-lg lg-text-xl"
          smooth
          to="#services"
          onClick={hidesidebar}
        >
          Services
        </HashLink>
        <HashLink
          className="mr-5 namee md-text-lg lg-text-xl"
          smooth
          to="#clients"
          onClick={hidesidebar}
        >
          Clients
        </HashLink>
        <HashLink
          className="mr-5 namee md-text-lg lg-text-xl"
          smooth
          to="#blogs"
          onClick={hidesidebar}
        >
          Blogs
        </HashLink>
       
      </div>

      {/* ------------main */}
      <div
        className="back flex justify-center lg:justify-start items-center "
        id="home"
      >
        <div
          className="z-10 flex pl-[10px] sm:pl-[40px] justify-evenly item-start w-[85%] lg:w-[50%] flex-col h-[16rem] "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1
            className="text-[25px]   sm:w-[79%] md:w-[63%]  lg:w-[80%] 
          xl:w-[67%] sm:text-4xl font-bold heading  relative  text-white  text-left m-auto lg:m-0"
          >
            POWER_TECH_FUSION
          </h1>
          <p className="text-white text-center  lg:text-start text-sm sm:text-lg">
            At POWER TECH FUSION, we are proud to be a premier provider of
            high-quality solutions. Our steadfast commitment to excellence and
            customer satisfaction drives us to offer reliable and innovative
            products. With extensive industry expertise, we ensure superior
            performance and energy efficiency in every solution we deliver.
          </p>
          <div
            className="butt2 flex justify-evenly items-center w-80   m-auto sm:m-auto   lg:m-0"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <HashLink smooth to="#about">
              <button className="with  ">Discover More</button>
            </HashLink>
            <HashLink smooth to="#contact">
              <button className="with ">Get Started</button>
            </HashLink>
          </div>
        </div>
        <a
          href="https://wa.me/+923236379199"
          className="fixed h-[80px] w-[80px] right-0 z-20 pp  mt-96 sm:mt-96 md:mt-96 lg:mt-72"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src="./img/whatsapp.png" alt="whatsapp" />
        </a>
        {hovered && (
          <div className="fixed right-[80px] z-20 clippy h-[50px] bottom-[100px] bg-blue-600 text-white p-2 rounded shadow-lg">
            Contact us on WhatsApp
          </div>
        )}
      </div>

      {/*------------- About */}
      <section
        className="text-gray-600 body-font bg-gray-100 overflow-hidden"
        id="about"
      >
        <div className="container px-2 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-3xl text-blue-500 tracking-widest font-medium title-font mb-1 underline companyy">
              About Us
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 ">
              "Power Tech Supplier"
            </h1>
            <p className=" lg:w-2/3  mx-auto leading-relaxed text-base">
              At POWER TECH FUSION, we pride ourselves on being a premier
              supplier of high-quality solutions. Our commitment to excellence
              and customer satisfaction drives us to provide reliable and
              innovative products. With years of industry experience, we ensure
              superior performance and energy efficiency in every solution we
              deliver.
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div
              className="md:w-1/2 xl:w-1/4 lg:w-1/2  px-10 py-10 sm:px-12 sm:py-12 md:px-10 md:py-10 lg:px-6 lg:py-5 border-l-2 border-gray-300 border-opacity-80 oneee"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="flex justify-evenly w-[80%] sm:w-[50%] md:w-[70%] lg:w-[62%] xl:w-full m-auto items-center md:flex-col lg:flex-row ">
                <FaHouseChimneyUser className="text-3xl -mt-2" />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 companyy">
                  Company Mission-Vision
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                Our mission is to deliver superior solutions enhancing comfort
                and efficiency. We envision leading the industry with
                innovation, reliability, and exceptional service, fostering
                sustainable growth and strong client relationships.
              </p>
            </div>
            <div
              className="md:w-1/2 xl:w-1/4 lg:w-1/2  sm:px-12 sm:py-12 md:px-10 md:py-10 lg:px-6 lg:py-6 border-l-2  border-gray-300 border-opacity-60 oneee"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="flex justify-evenly w-[75%] sm:w-[50%] md:w-[70%] lg:w-[65%] xl:w-full m-auto md:flex-col lg:flex-row items-center">
                <RiGraduationCapLine className="text-3xl -mt-2" />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 companyy">
                  Experience and Expertise
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                With extensive experience, our expert team provides innovative,
                reliable solutions tailored to client needs, ensuring optimal
                performance and exceptional customer satisfaction.
              </p>
            </div>
            <div
              className="md:w-1/2 xl:w-1/4 lg:w-1/2 px-5 py-5  sm:px-6 sm:py-5 border-l-2  border-gray-300 border-opacity-60 oneee"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="flex justify-evenly  w-[75%] sm:w-[35%] md:w-[50%] lg:w-[45%] xl:w-full m-auto items-center md:flex-col lg:flex-row ">
                <MdOutlineHighQuality className="text-3xl -mt-2" />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 companyy">
                  Quality Assurance
                </h2>
              </div>{" "}
              <p className="leading-relaxed text-base mb-4">
                We ensure every solution meets the highest standards through
                rigorous testing, guaranteeing reliability, efficiency, and
                performance, thus providing our clients with unmatched quality
                and peace of mind.
              </p>
            </div>
            <div
              className="md:w-1/2 xl:w-1/4 lg:w-1/2  px-6 py-5 border-l-2 border-gray-300 border-opacity-60 oneee"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="flex justify-evenly w-[90%] sm:w-[60%] md:w-[50%] lg:w-[75%] xl:w-full m-auto items-center md:flex-col lg:flex-row ">
                <LiaSellcast className=" text-4xl sm:text-3xl md:text-3xl  lg:text-4xl xl:text-6xl -mt-2" />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 companyy">
                  Unique Selling Proposition (USP)
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                Our USP is delivering meticulously tested HVAC solutions,
                ensuring top-tier reliability and efficiency. We blend
                innovation with rigorous quality assurance to provide unmatched
                performance, ensuring client satisfaction and peace of mind.
              </p>
            </div>
          </div>

          <Link to="/aboutus">
            <button className="btn-cssbuttons mt-6">
              <span>Click to see More </span>
              <span></span>
              <ul>
                <li>
                  <a>About Us +</a>
                </li>
              </ul>
            </button>
          </Link>
        </div>
      </section>

      {/* slider */}
      <div
        className="logos relative h-[360px] w-full overflow-hidden"
        id="clients"
      >
        <h1 className="p-[10px] text-[45px] h-[100px] font-bold text-white underline">
          Our Clients
        </h1>
        <div className="logo-slide">
          <img src="./img/alfatah.png" alt="alfatah" />
          <img src="./img/dawnbread.png" alt="dawnbread" />
          <img src="./img/hamdard.png" alt="hamdard" />
          <img src="./img/moltyfoam.png" alt="moltyfoam" />
          <img src="./img/tevta.png" alt="tevta" />
          <img src="./img/siemens.png" alt="siemens" />
          <img src="./img/orient.png" alt="orient" />
          <img src="./img/pasha.png" alt="pasha" />
          <img src="./img/sabroso.png" alt="sabroso" />
          <img src="./img/shahtaj.png" alt="shahtaj" />
        </div>
      </div>

      {/* ----------------------------projects */}
      <section
        className="text-gray-600 bg-gray-100 body-font overflow-hidden"
        id="services"
      >
        <h1 className="text-5xl underline companyy text-blue-600 p-5 mt-[20px]">
          Services
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4  flex justify-evenly  md:w-[45%] lg:w-1/3 m-auto items-center hover:cursor-pointer oneee"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden projectdiv">
                  <div
                    className={`lg:h-48 md:h-36 w-full object-cover object-center ${project.className}`}
                  ></div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {project.category}
                    </h2>
                    <h1 className="title-font text-2xl sm:text-xl font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Review
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span
                        id="like-button"
                        className={`text-gray-600 mr-3 md:ml-16  inline-flex items-center lg:ml-auto  ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer ${
                          project.isLiked ? "text-red-500" : ""
                        }`}
                        onClick={() => toggleLike(project.id)}
                      >
                        <svg
                          id="like-icon"
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill={project.isLiked ? "currentColor" : "none"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l8.5 8.5 8.5-8.5a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                        <span id="like-count">{project.likeCount}</span>
                      </span>
                      <span
                        className="text-gray-600   inline-flex items-center leading-none text-sm cursor-pointer"
                        onClick={() => toggleCommentSection(project.id)}
                      >
                        <svg
                          className="w-4 h-4 mr-1 hover:text-blue-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {project.comments.length}
                      </span>
                    </div>
                    {project.showCommentSection && (
                      <div className="mt-4">
                        <div className="mb-2 flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900">
                            Comments
                          </h3>
                          <button
                            className="text-red-500"
                            onClick={() => toggleCommentSection(project.id)}
                          >
                            ×
                          </button>
                        </div>
                        <form
                          onSubmit={(e) => handleCommentSubmit(e, project.id)}
                          className="flex items-center mb-4"
                        >
                          <input
                            type="text"
                            value={project.comment || ""}
                            onChange={(e) =>
                              handleCommentChange(project.id, e.target.value)
                            }
                            className="flex-grow border border-gray-300 rounded px-4 py-2 mr-2"
                            placeholder="Write a comment..."
                          />
                          <button type="submit" className="text-blue-500">
                            Submit
                          </button>
                        </form>
                        <div>
                          {project.comments.map((comment, index) => (
                            <div
                              key={index}
                              className="border-b border-gray-200 text-start py-2"
                            >
                              {index + 1}: {comment}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/services">
          <button className="btn-cssbuttons mt-[-10px]">
            <span>Click to see More </span>
            <span></span>
            <ul>
              <li>
                <a>Services +</a>
              </li>
            </ul>
          </button>
        </Link>
      </section>
      {/* -----------------map email */}
      <section className="relative bg-gray-100 overflow-hidden" id="support">
        <h1 className=" text-4xl sm:text-5xl underline companyy text-blue-600 p-5 ">
          Location
        </h1>

        <div className="container md:px-2 md:py-6 lg:px-5 lg:py-8 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            className=" sm:w-1/2 lg:w-2/3 md:w-1/2 bg-gray-300 border rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end justify-start relative"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.6827004839222!2d74.33332877870004!3d31.586429197300163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b6ae6fa5949%3A0xa790218d34924b0!2sHeaven%20Marriage%20Hall!5e0!3m2!1sen!2s!4v1718393245444!5m2!1sen!2s"
            ></iframe>
            <div className="bg-white w-[85%] sm:w-[70%] relative flex flex-wrap py-2 sm:py-6 rounded shadow-md h-[44%] sm:h-[30%] ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs md:w-full lg:w-auto lg:text-center  text-start">
                  ADDRESS:
                </h2>
                <p className="mt-1 text-start sm:text-center ">
                  Shop#10,near Lal-Masjid,Chah Miran,Lahore
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 opacity-0 sm:opacity-100">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs md:w-full lg:w-auto lg:text-center  md:text-start ">
                  EMAIL:
                </h2>
                <a className="text-indigo-500 leading-relaxed underline hover:no-underline cursor-pointer">
                  salarbutt321@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">
                  <a href="https://wa.me/+923236379199">+923236379199</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-[80%] m-auto  lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto  rounded-xl py-2 sm:py-0 md:py-8 mt-8 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="mb-5 text-gray-600">
              We serve our best to encourage our clients
            </p>
            <form onSubmit={sendMail}>
              <div className="relative mb-4">
                <p
                  for="name"
                  className="text-lg text-gray-600  text-left w-[90%] m-auto  font-semibold"
                >
                  Name:
                </p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-[90%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <p
                  for="email"
                  className="text-lg text-gray-600  text-left w-[90%] m-auto font-semibold"
                >
                  Email:
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-[90%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <p
                  for="message"
                  className="text-lg text-gray-600  text-left w-[90%] m-auto font-semibold"
                >
                  Message:
                </p>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter message"
                  className="w-[90%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send Mail
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We will respond you soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Main;
