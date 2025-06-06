import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import SrollDown from "./SrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <SrollDown />
      </div>
    </section>
  );
};

export default Home;
