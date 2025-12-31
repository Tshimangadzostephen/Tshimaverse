import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Offer</h2>
      <span className="section__subtitle">Highlights</span>
      <div className="services__container container grid">

        {/* Web Design */}
        <div className="services__content web_design_content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Web Design</h3>
              <p className="services__modal-description">
                Designing intuitive, user-friendly, and visually appealing websites with a focus on user experience (UX).
              </p>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="services__content web_development_content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title web_dev_title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services__button web_dev_button" onClick={() => toggleTab(2)}>
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                I build responsive and user-friendly web applications using modern frameworks like Angular and .NET.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Development */}
        <div className="services__content mobile_dev_content">
          <div>
            <i className="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">
              Mobile <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Mobile Development</h3>
              <p className="services__modal-description">
                Creating intuitive and responsive mobile applications that focus on real user needs, performance, and clean, maintainable code.
              </p>
            </div>
          </div>
        </div>

        {/* API & Backend Development */}
        <div className="services__content api_backend_content">
          <div>
            <i className="uil uil-server services__icon"></i>
            <h3 className="services__title">
              API & <br /> Backend
            </h3>
          </div>
          <span className="services__button api_backend_button" onClick={() => toggleTab(4)}>
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">API & Backend Development</h3>
              <p className="services__modal-description">
                Designing and building secure, scalable REST APIs using .NET, SQL Server, 
                and modern backend patterns to support web and mobile applications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
