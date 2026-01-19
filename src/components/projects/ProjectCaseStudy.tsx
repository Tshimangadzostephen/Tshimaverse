import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProjectCaseStudy.css";
import { projects } from "./Data";

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when opening case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackToProjects = () => {
    navigate("/");

    // wait for homepage to render, then scroll to #projects
    setTimeout(() => {
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  if (!project) {
    return (
      <div className="case-wrap">
        <h1 className="case-title">Project not found</h1>
        <Link to="/" className="case-back">
          Back home
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <section className="case-wrap">
      {/* ✅ FIXED BACK BUTTON */}
      <button type="button" className="case-back" onClick={handleBackToProjects}>
        ← Back to Projects
      </button>

      <div className="case-hero">
        <div className="case-hero-text">
          <h1 className="case-title">{cs?.heroTitle ?? project.title}</h1>
          <p className="case-subtitle">{project.description}</p>

          <div className="case-tags">
            {project.tags.map((t) => (
              <span key={t} className="case-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="case-actions">
            {project.link && (
              <a
                className="case-btn"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            )}
            {project.demo && (
              <a
                className="case-btn"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        <div className="case-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>

      {cs ? (
        <>
          <div className="case-section">
            <h2>Overview</h2>
            <p>{cs.overview}</p>
          </div>

          <div className="case-grid">
            <div className="case-section">
              <h2>Highlights</h2>
              <ul>
                {cs.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="case-section">
              <h2>Tech Stack</h2>
              <ul>
                {cs.techStack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          {cs.sections.map((sec) => (
            <div className="case-section" key={sec.title}>
              <h2>{sec.title}</h2>
              {sec.body.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </>
      ) : (
        <div className="case-section">
          <h2>Case study coming soon</h2>
          <p>
            This project doesn’t have a case study yet, but the links above have
            the details.
          </p>
        </div>
      )}
    </section>
  );
}
