import React from "react";
import "./Projects.css";
import portfolioImage from "../../assets/portfolio_design.png";
import kryptoImage from "../../assets/kryto.png"

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
      title: "Partial Stack Overflow Clone",
      description: "A basic Stack Overflow clone built with ASP.NET MVC 5, featuring question and answer functionality with SQL Server integration.",
      image: "https://datascientest.com/en/files/2024/03/Stackoverflow-768x422-1.jpg",
      link: "https://github.com/Tshimangadzostephen/StackOverflowProject",
      demo: "",
      tags: ["C#", "MVC", "SQL Server"]
    },
    {
      title: "Krypto",
      description:
        "A conceptual project created as part of my Figma learning journey. This helped me explore design fundamentals, including layout grids and gradients.",
      image: kryptoImage,
      link: "",
      demo: "https://www.figma.com/design/69BjYFdhr6alX1T5h2i7Be/KRYPTO-PROJECT?node-id=0-1&t=C7xKkRYIhP2AV4DI-1",
      tags: ["Figma", "Grid", "Gradients"],
    },
    {
      title: "Inventory Management System",
      description:
        "RESTful API built with .NET Core, integrated with SQL Server and JWT authentication. Fully documented and tested with Postman.",
      image:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/t-com_netcore_770px.png?sfvrsn=44c053c4_0",
      link: "",
      demo: "",
      tags: ["C#", "Swagger", "SQL Server", "Entity Framework", "LINQ"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section__title">Featured Projects</h2>
      <span className="section__subtitle">
        Self-initiated projects and experiments      </span>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
