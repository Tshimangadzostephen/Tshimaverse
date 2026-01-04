import React, { useState } from "react";
import { DataReviews } from "./DataReviews";
import "./Reviews.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Reviews = () => {
  // store only ONE expanded card id
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="testimonial container section">
      <h2 className="section__title">Recommendations</h2>
      <span className="section__subtitle">
        Feedback from those I’ve learned from and worked with
      </span>

      <Swiper
        loop
        grabCursor
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 48 },
        }}
        className="testimonial__container"
      >
        {DataReviews.map(
          ({ id, image, title, Subtitle, linkedin, description }) => {
            const isExpanded = expandedId === id;

            return (
              <SwiperSlide className="testimonial__slide" key={id}>
                <div className="testimonial__card">
                  <img src={image} alt="" className="testimonial__img" />

                  <h3 className="testimonial__name">
                    {title} |{" "}
                    <a
                      href={linkedin}
                      className="home__social-icon linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="uil uil-linkedin-alt"></i>
                    </a>
                  </h3>

                  <h5 className="testimonial__subtitle">| {Subtitle}</h5>

                  <p
                    className={`testimonial__description ${isExpanded ? "expanded" : ""
                      }`}
                  >
                    {description}
                  </p>

                  {description.length > 150 && (
                    <span
                      className="testimonial__toggle"
                      onClick={() => toggleDescription(id)}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Reviews;
