import React from "react";
import "./Projects.css";
import portfolioImage from "../../assets/portfolio_design.png";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demo?: string;
  link: string;
  tags: string[];
}

function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  demo,
}: ProjectCardProps) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <i className="uil uil-github-alt"></i>
            Source
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <i className="uil uil-link-alt"></i>
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projectData: ProjectCardProps[] = [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React, CSS and Vite.",
      image: portfolioImage,
      link: "https://github.com/Tshimangadzostephen/Tshimaverse",
      demo: "https://tshimaverse.vercel.app",
      tags: ["React", "CSS", "Vite"],
    },
    {
      title: "Coming Soon Page",
      description:
        "RESTful API built with .NET Core, integrated with SQL Server and JWT authentication. Fully documented and tested with Postman.",
      image:
        "https://miro.medium.com/v2/resize:fit:1064/1*O4EpCHRBgn-sevVV-iHnjw.jpeg",
      link: "",
      demo: "",
      tags: ["C#","Swagger","SQL Server","Entity Framework"],
    },
    {
      title: "Coming Soon Page",
      description:
        "A project currently in development. More updates coming soon.",
      image:
        "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
      link: "",
      demo: "",
      tags: [],
    },
    {
      title: "Coming Soon Page",
      description:
        "A project currently in development. More updates coming soon.",
      image:
        "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
      link: "",
      demo: "",
      tags: [],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section__title">Featured Projects</h2>
      <span className="section__subtitle">
        A selection of my recent projects
      </span>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
