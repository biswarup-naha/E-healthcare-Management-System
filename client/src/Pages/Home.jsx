import React from "react";
import { Navbar } from "../Components/Navbar";
import { Department } from "../Components/Department";
import Message from "../Components/Message";
import { Footer } from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      {/* Navbar + Hero Section */}
      <div className="sec-1 w-full h-fit bg-gradient-to-tl from-[#76dbcf]">
        <Navbar />
        <div className="hero w-full flex items-center px-20">
          <div className="hero-pic w-1/2 flex justify-center">
            <img className="w-1/2" src="/hero-pic.png" alt="" />
          </div>
          <div className="hero-text w-1/2 flex flex-col items-center ">
            <h1 className="font-semibold text-4xl">We are Aaragya</h1>
            <h1 className="text-3xl">We are here to provide world</h1>
            <h1 className="text-3xl">class healthcare for everyone</h1>
          </div>
        </div>
      </div>

      {/* Departments section */}
      <div className="sec-2 w-full h-fit p-5 bg-gradient-to-t from-[#76dbcf] to-[#d0f7f3]">
        <div className="department-head flex justify-center mt-3">
          <h1 className="text-3xl font-semibold">
            Find Doctors By Your Health Concern
          </h1>
        </div>
        <div className="departments w-full h-fit px-20 mt-9 flex flex-wrap flex-shrink-0 justify-around">
          <Department data={"Dermatology"} />
          <Department data={"Cadiology"} />
          <Department data={"Neurology"} />
          <Department data={"Orthopedics"} />
          <Department data={"Onchology"} />
          <Department data={"Eye Specialist"} />
          <Department data={"ENT Specialist"} />
          <Department data={"Radiology"} />
        </div>
      </div>

      {/* Message Section + footer */}
      <div className="sec-3 w-full h-fit bg-gradient-to-b from-[#76dbcf] to-[#d0f7f3] pb-5">
        <div className="department-head flex justify-center">
          <h1 className="text-3xl font-semibold mt-1">Send Us A Message</h1>
        </div>
        <Message />
        <div className="footer px-10 ">
          <hr className="h-px my-8 border-0 bg-[#76dbcf]" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
