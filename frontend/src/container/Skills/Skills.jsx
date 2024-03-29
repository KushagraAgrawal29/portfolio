import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ReactToolTip from "react-tooltip";

import AppWrap from "../../wrapper/appWrap";
import MotionWrap from "../../wrapper/motionWrap";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills'] | order(order asc)";

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Technologies</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <div className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skill"), "skill", "app__skillbg");
