import React, { useState } from "react";
import { DataReviews } from "./DataReviews";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const MAX_LENGTH = 200;

const Reviews = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleDescription = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="testimonial container section">
      <h2 className="section__title">Echo Chamber</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        loop={true}
        grabCursor={true}
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
            const displayText = isExpanded
              ? description
              : description.length > MAX_LENGTH
              ? description.slice(0, MAX_LENGTH) + "..."
              : description;

            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <img src={image} alt="" className="testimonial__img" />
                <h3 className="testimonial__name">
                  {title} |{" "}
                  <a
                    href={linkedin}
                    className="home__social-icon linkedin"
                    target="_blank"
                  >
                    <i className="uil uil-linkedin-alt"></i>
                  </a>
                </h3>
                <h5 className="testimonial__subtitle">| {Subtitle}</h5>
                <p className="testimonial__description">
                  {displayText}
                  {description.length > MAX_LENGTH && (
                    <span
                      onClick={() => toggleDescription(id)}
                      style={{
                        color: "#1c393d",
                        cursor: "pointer",
                        marginLeft: 5,
                      }}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </span>
                  )}
                </p>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Reviews;
