import React, { useState } from "react";
import "./Quaification.css";
import Up_Img from "../../assets/University_of_Pretoria_Coat_of_Arms.png";
import moyo_img from "../../assets/moyo-logo.png";
import rev_img from "../../assets/rev logo.webp";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Work Experience</h2>
      <span className="section__subtitle">Academic & Professional Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex  qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex  qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Work History
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Informatics -Information Systems
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="image" className="up__img" />
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

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">
                  Information and Knowledge Systems - Genetics
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="image" className="up__img" />
                  University of Pretoria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Software Developer
                </h3>
                <span className="qualification__subtitle">
                  <img src={moyo_img} alt="image" className="moyo__img" />
                  Moyo Business Advisory
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2024 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Graduate Consultant</h3>
                <span className="qualification__subtitle">
                  <img src={moyo_img} alt="image" className="moyo__img" />
                  Moyo Business Advisory
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Transcriptionist</h3>
                <span className="qualification__subtitle">
                  <img src={rev_img} alt="image" className="rev_img" />
                  Rev
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
