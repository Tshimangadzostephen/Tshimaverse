import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__brand">
            <h2 className="footer__title">Tshimangadzo</h2>
            <p className="footer__subtitle">Full Stack Developer</p>
          </div>

          <div className="footer__links">
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

        <div className="footer__bottom">
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
