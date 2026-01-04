import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Social = () => {
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socialRef.current) return;

    const icons = socialRef.current.querySelectorAll(".home__social-icon");

    gsap.fromTo(
      icons,
      {
        opacity: 0,
        x: -40,  // slightly more movement for nicer effect
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,      // slower
        stagger: 0.25,      // slower stagger between icons
        ease: "power2.out", // smooth ease
        delay: 0.3,         // let section settle
        clearProps: "transform",
      }
    );
  }, []);

  return (
    <div className="home__social" ref={socialRef}>
      <a
        href="https://www.instagram.com/stephen_tshimangadzo/profilecard/?igsh=dWZpMzVndW5keXAw"
        className="home__social-icon instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
        className="home__social-icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/Tshimangadzostephen"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://youtube.com/@stephentshima?si=TV0fNmOUh71dLcAu"
        className="home__social-icon youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
