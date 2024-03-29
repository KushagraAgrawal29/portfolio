import React from "react";
import { motion } from "framer-motion";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import AppWrap from "../../wrapper/appWrap";
import images from "../../constants/images";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">KUSHAGRA</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.about} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
        {[images.design, images.responsive, images.code].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>

      <div className="app__header-icons">
        <a href="https://github.com/KushagraAgrawal29" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/kushagra-agrawal-3aa619259/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="#contact">
          <AiFillMail />
        </a>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
