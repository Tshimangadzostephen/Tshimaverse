// src/App.tsx
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Reviews from "./components/reviews/Reviews";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

import ProjectCaseStudy from "./components/projects/ProjectCaseStudy";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function AppLayout() {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 1024);

  useEffect(() => {
    // Advisory banner for mobile/tablet
    if (!isDesktop) {
      const banner = document.createElement("div");
      banner.id = "desktop-advice-banner";
      banner.style.position = "fixed";
      banner.style.top = "20px";
      banner.style.left = "50%";
      banner.style.transform = "translateX(-50%)";
      banner.style.maxWidth = "90%";
      banner.style.backgroundColor = "#1a1a1a";
      banner.style.color = "#fff";
      banner.style.textAlign = "center";
      banner.style.padding = "16px 20px";
      banner.style.zIndex = "9999";
      banner.style.fontSize = "16px";
      banner.style.fontWeight = "500";
      banner.style.borderRadius = "12px";
      banner.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      banner.style.display = "flex";
      banner.style.flexDirection = "column";
      banner.style.alignItems = "center";
      banner.style.gap = "12px";
      banner.style.opacity = "0";
      banner.style.transition = "opacity 0.5s ease, transform 0.5s ease";

      banner.innerHTML = `
        <span>
          For the best interactive experience, I recommend using a larger screen or desktop.
        </span>
        <button id="banner-close-btn" style="
          background: #fff;
          color: #1a1a1a;
          border: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        ">Dismiss</button>
      `;

      document.body.appendChild(banner);

      // Fade-in animation
      setTimeout(() => {
        banner.style.opacity = "1";
        banner.style.transform = "translateX(-50%) translateY(0)";
      }, 50);

      // Close button
      const closeBtn = document.getElementById("banner-close-btn");
      closeBtn?.addEventListener("click", () => {
        banner.style.opacity = "0";
        banner.style.transform = "translateX(-50%) translateY(-20px)";
        setTimeout(() => banner.remove(), 400);
      });
    }

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    const sections = document.querySelectorAll<HTMLElement>(".section, .footer");

    if (isDesktop) {
      // DESKTOP: Parallax stacking effect
      sections.forEach((section, index) => {
        if (index === 0) {
          section.style.position = "relative";
          section.style.zIndex = "1";
          section.style.backgroundColor = "var(--body-color)";
          return;
        }

        section.style.position = "sticky";
        section.style.top = "0";
        section.style.zIndex = String(index + 1);
        section.style.backgroundColor = "var(--body-color)";
        section.style.minHeight = "100vh";

        gsap.fromTo(
          section,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: 1,
            },
          }
        );
      });
    } else {
      // MOBILE/TABLET: Normal scroll with fade-in animations
      sections.forEach((section, index) => {
        section.style.position = "relative";
        section.style.backgroundColor = "var(--body-color)";

        if (index > 0) {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    // Handle resize
    const handleResize = () => {
      const nowDesktop = window.innerWidth > 1024;
      if (nowDesktop !== isDesktop) {
        window.location.reload();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
      const banner = document.getElementById("desktop-advice-banner");
      if (banner) banner.remove();
    };
  }, [isDesktop]);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
