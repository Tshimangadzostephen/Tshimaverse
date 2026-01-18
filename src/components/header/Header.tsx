import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;

    if (Toggle) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [Toggle]);

  // Active link on scroll (section spy)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const section = current as HTMLElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        if (!sectionId) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => ShowMenu(false);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a
          href="#home"
          className="nav__logo"
          onClick={() => handleLinkClick("home")}
        >
          <span className="logo-light">tshima</span>
          <span className="logo-dark">verse</span>
          <span className="logo-dot">.</span>
        </a>

        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          {/* Close (mobile only) */}
          <button
            className="nav__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span className="nav__close-text">close</span>
            <i className="uil uil-times"></i>
          </button>

          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                data-mobile="Home"
                onClick={() => handleLinkClick("home")}
                className={`nav__link ${
                  activeSection === "home" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-estate nav__icon"></i>
                <span className="nav__link-text">Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                data-mobile="About"
                onClick={() => handleLinkClick("about")}
                className={`nav__link ${
                  activeSection === "about" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-user nav__icon"></i>
                <span className="nav__link-text">About</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                data-mobile="Works"
                onClick={() => handleLinkClick("projects")}
                className={`nav__link ${
                  activeSection === "projects" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-scenery nav__icon"></i>
                <span className="nav__link-text">Projects</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                data-mobile="Skills"
                onClick={() => handleLinkClick("skills")}
                className={`nav__link ${
                  activeSection === "skills" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-graduation-cap nav__icon"></i>
                <span className="nav__link-text">Skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                data-mobile="Contact"
                onClick={() => handleLinkClick("contact")}
                className={`nav__link ${
                  activeSection === "contact" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-message nav__icon"></i>
                <span className="nav__link-text">Contact</span>
              </a>
            </li>
          </ul>

          {/* ✅ Your updated footer layout */}
          <div className="nav__footer">
            <div className="nav__footer-row">
              <span className="nav__footer-line" />
            </div>

            <div className="nav__footer-social">
              <a
                href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
                target="_blank"
                rel="noreferrer"
                className="nav__footer-linkedin"
                aria-label="LinkedIn"
              >
                <i className="uil uil-linkedin"></i>
              </a>
            </div>

            <div className="nav__footer-brand">tshimaverse</div>
          </div>
        </div>

        {/* Toggle (mobile only) */}
        <div className="nav__toggle" onClick={() => ShowMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
