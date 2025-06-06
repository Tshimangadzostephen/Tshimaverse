import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/stephen_tshimangadzo/profilecard/?igsh=dWZpMzVndW5keXAw"
        className="home__social-icon instagram"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
        className="home__social-icon linkedin"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Tshimangadzostephen"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://youtube.com/@stephentshima?si=TV0fNmOUh71dLcAu"
        className="home__social-icon youtube"
        target="_blank"
      >
        <i className="uit uil-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
