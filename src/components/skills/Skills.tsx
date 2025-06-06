import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import DevOps from "./DevOps";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Skills</h2>
      <span className="section__subtitle">My Technical Toolkit</span>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <DevOps />
      </div>
    </section>
  );
};

export default Skills;
