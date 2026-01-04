import React, { useState, useEffect, useRef } from "react";
import { DataReviews } from "./DataReviews";
import "./Reviews.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  // store only ONE expanded card id
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDescription = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    // Only run animations on desktop
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) return; // Skip animations on mobile/tablet

    const ctx = gsap.context(() => {
      // Title animation - fade and slide down
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Subtitle animation - fade and slide down
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Swiper container animation - fade and scale
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Testimonial cards animation - stagger slide up
      gsap.fromTo(
        ".testimonial__card",
        {
          opacity: 0,
          y: 80,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Profile images animation - scale and rotate
      gsap.fromTo(
        ".testimonial__img",
        {
          opacity: 0,
          scale: 0,
          rotation: -90,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Names animation - slide from left
      gsap.fromTo(
        ".testimonial__name",
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Subtitles animation - fade in
      gsap.fromTo(
        ".testimonial__subtitle",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Descriptions animation - fade and expand
      gsap.fromTo(
        ".testimonial__description",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Toggle buttons animation - pop in
      gsap.fromTo(
        ".testimonial__toggle",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial container section">
      <h2 className="section__title" ref={titleRef}>Recommendations</h2>
      <span className="section__subtitle" ref={subtitleRef}>
        Feedback from those I've learned from and worked with
      </span>

      <div ref={containerRef}>
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
      </div>
    </section>
  );
};

export default Reviews;