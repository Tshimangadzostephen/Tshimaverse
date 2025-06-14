import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box experience">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years Working</span>
      </div>

      <div className="about__box projects">
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3 Projects</span>
      </div>

      <div className="about__box licenses">
        <i className="bx bx-certification about__icon"></i>
        <h3 className="about__title">Licenses</h3>
        <span className="about__subtitle">Microsoft Azure</span>
      </div>

      <div className="about__box focus">
        <i className="uil uil-focus-target about__icon"></i>
        <h3 className="about__title">Focus</h3>
        <span className="about__subtitle">Full Stack Dev</span>
      </div>
    </div>
  );
};

export default Info;
