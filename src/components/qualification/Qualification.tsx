import React, { useState } from "react";
import "./Quaification.css";
import Up_Img from "../../assets/University_of_Pretoria_Coat_of_Arms.png";
import moyo_img from "../../assets/moyo-logo.png";
import rev_img from "../../assets/rev logo.webp";

const Qualification = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Work Experience</h2>
      <span className="section__subtitle">Academic & Professional Journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(1)}
          >
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(2)}
          >
            Work History
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* Education */}
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            {/* First education item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Informatics - Information Systems
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="University" className="up__img" />
                  University of Pretoria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Second education item */}
            <div className="qualification__data">
              <div></div> {/* Empty left side */}
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Information and Knowledge Systems - Genetics
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="University" className="up__img" />
                  University of Pretoria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>
            </div>
          </div>

          {/* Work */}
          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            {/* First work item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  <img src={moyo_img} alt="Moyo" className="moyo__img" />
                  Moyo Business Advisory
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Second work item */}
            <div className="qualification__data">
              <div></div> {/* Empty left side */}
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Transcriptionist</h3>
                <span className="qualification__subtitle">
                  <img src={rev_img} alt="Rev" className="rev_img" />
                  Rev
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
