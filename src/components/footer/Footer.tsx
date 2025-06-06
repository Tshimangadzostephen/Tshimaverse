import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Tshimangadzo</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="projects" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/stephen_tshimangadzo/profilecard/?igsh=dWZpMzVndW5keXAw"
            className="footer__social-link instagram"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
            className="footer__social-link linkedin"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/Tshimangadzostephen"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://youtube.com/@stephentshima?si=TV0fNmOUh71dLcAu"
            className="footer__social-link youtube"
            target="_blank"
          >
            <i className="uit uil-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Tshimangadzo. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
