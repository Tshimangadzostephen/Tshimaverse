import React, { useState } from "react";
import "./Services.css";

interface Service {
  id: number;
  icon: string;
  title: string[];
  description: string;
  colorClass: string;
  buttonClass: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: "uil-web-grid",
    title: ["Web", "Design"],
    description:
      "Designing intuitive, user-friendly, and visually appealing websites with a focus on user experience (UX).",
    colorClass: "web_design_content",
    buttonClass: "",
  },
  {
    id: 2,
    icon: "uil-arrow",
    title: ["Web", "Development"],
    description:
      "Building responsive and user-friendly web applications using modern frameworks like Angular and .NET.",
    colorClass: "web_dev_blue_content",
    buttonClass: "web_dev_button",
  },
  {
    id: 3,
    icon: "uil-mobile-android",
    title: ["Mobile", "Development"],
    description:
      "Creating intuitive and responsive mobile applications that focus on real user needs, performance, and clean, maintainable code.",
    colorClass: "mobile_dev_content",
    buttonClass: "",
  },
  {
    id: 4,
    icon: "uil-server",
    title: ["API &", "Backend"],
    description:
      "Developing robust APIs and backend systems, ensuring secure, scalable, and maintainable architecture for applications.",
    colorClass: "api_backend_green_content",
    buttonClass: "api_backend_button",
  },
];

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Offer</h2>
      <span className="section__subtitle">Highlights</span>

      <div className="services__container container">
        {servicesData.map(
          ({ id, icon, title, description, colorClass, buttonClass }) => (
            <div
              key={id}
              className={`services__content ${colorClass} ${
                flippedCard === id ? "flipped" : ""
              }`}
              onClick={() => toggleCard(id)}
            >
              {/* Front */}
              <div className="services__front">
                <i className={`uil ${icon} services__icon`}></i>
                <h3 className="services__title">
                  {title.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <span className={`services__button ${buttonClass}`}>
                  More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
              </div>

              {/* Back */}
              <div className="services__back">
                <h3 className="services__modal-title">
                  {title.join(" ")}
                </h3>
                <p className="services__modal-description">{description}</p>
                <span
                  className={`services__button ${buttonClass}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedCard(null);
                  }}
                >
                  Close
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
