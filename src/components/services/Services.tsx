import React, { useState } from "react";
import "./Services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Offer</h2>
      <span className="section__subtitle">Highlights</span>
      <div className="services__container container grid">
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

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Web Design</h3>
              <p className="services__modal-description">
                Designing intuitive, user-friendly, and visually appealing
                websites with a focus on user experience (UX).
              </p>
            </div>
          </div>
        </div>

        <div className="services__content web_development_content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title web_dev_title">
              Web <br /> Development
            </h3>
          </div>

          <span
            className="services__button web_dev_button"
            onClick={() => toggleTab(2)}
          >
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                I build responsive and user-friendly web applications using
                modern frameworks like Angular and .NET.
              </p>
            </div>
          </div>
        </div>

        <div className="services__content whatsapp_content">
          <div>
            <i className="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">
              Mobile <br/>Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">
                Mobile Development
              </h3>
              <p className="services__modal-description">
                Creating intuitive and responsive mobile applications that focus on real user needs,
                performance, and clean, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
