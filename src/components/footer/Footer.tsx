import React, { useEffect, useRef } from "react";
import "./Footer.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animations on desktop
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) return; // Skip animations on mobile/tablet

    const ctx = gsap.context(() => {
      // Brand animation - fade and slide from left
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, x: -60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Title animation - slide down with bounce
      gsap.fromTo(
        ".footer__title",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: brandRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Subtitle animation - fade in
      gsap.fromTo(
        ".footer__subtitle",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: brandRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Links section animation - slide from right
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Footer groups animation - stagger from bottom
      gsap.fromTo(
        ".footer__group",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Navigation links animation - stagger from left
      gsap.fromTo(
        ".footer__link",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Social icons animation - rotate and scale
      gsap.fromTo(
        ".footer__social-link",
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Bottom section animation - fade and slide up
      gsap.fromTo(
        bottomRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer section">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__brand" ref={brandRef}>
            <h2 className="footer__title">Tshimangadzo</h2>
            <p className="footer__subtitle">Full Stack Developer</p>
          </div>

          <div className="footer__links" ref={linksRef}>
            <div className="footer__group">
              <h3 className="footer__group-title">Navigation</h3>
              <ul className="footer__list">
                <li>
                  <a href="#home" className="footer__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="footer__link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="footer__link">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__group">
              <h3 className="footer__group-title">Connect</h3>
              <div className="footer__social">
                <a
                  href="https://www.instagram.com/stephen_tshimangadzo/profilecard/?igsh=dWZpMzVndW5keXAw"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="uil uil-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/Tshimangadzostephen"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="uil uil-github-alt"></i>
                </a>

                <a
                  href="https://youtube.com/@stephentshima?si=TV0fNmOUh71dLcAu"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="uil uil-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom" ref={bottomRef}>
          <span className="footer__copy">
            © {new Date().getFullYear()} Tshimangadzo Munzhelele. All rights
            reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;