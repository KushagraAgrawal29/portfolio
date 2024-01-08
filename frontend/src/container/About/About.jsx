import React from "react";

import AppWrap from "../../wrapper/appWrap";
import MotionWrap from "../../wrapper/motionWrap";
import images from "../../constants/images";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__about-content">
        <div className="app__about-text">
          <h2 className="head-text">About Me</h2>
          <p className="p-text text-center">
            I am a Fullstack Web Developer, currently working Mern projects
            with HTML/CSS/JS/React.Js/Express.Js/Next.Js and many more tech-stacks.
          </p>
          <p className="p-text text-center">
            I enjoy developing Responsive websites. Also, interested in solving programming problems
            in C++ with over 300+ questions solved on <a href="https://leetcode.com/wilder21/">LEETCODE</a>
            {' '}and open for work.
          </p>
        </div>
        <div className="app__about-img">
          <img src={images.res} alt="about image"/>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__aboutbg");
