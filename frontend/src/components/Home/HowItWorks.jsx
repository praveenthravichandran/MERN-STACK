import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create an account and gain access to exclusive features and personalized content tailored to your preferences. 
              Join our community and unlock a world of possibilities today!
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Discover exciting career opportunities by browsing our job listings or post your job opening to attract top talent. 
              Join our platform to connect with skilled professionals and advance your recruitment goals!.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for your dream job with just a few clicks, or recruit suitable candidates effortlessly through our streamlined platform. 
              Take the next step in your career journey or find the perfect addition to your team today!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
