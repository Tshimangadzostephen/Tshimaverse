import React, { useState } from "react";
import { DataReviews } from "./DataReviews";
import "./Reviews.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Reviews = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleDescription = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
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
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3, spaceBetween: 48 },
        }}
        modules={[Pagination]}
        className="testimonial__container"
      >
        {DataReviews.map(
          ({ id, image, title, Subtitle, linkedin, description }) => {
            const isExpanded = expandedIds.includes(id);

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
                    className={`testimonial__description ${
                      isExpanded ? "expanded" : ""
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
