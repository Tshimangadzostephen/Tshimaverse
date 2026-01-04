import React from "react";
import "./Projects.css";
import portfolioImage from "../../assets/portfolio_design.png";
import kryptoImage from "../../assets/kryto.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <img src={image} alt={title} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="card-tags">
          {tags.map(tag => (
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
      description: "A personal portfolio website built with React, CSS and Vite.",
      image: portfolioImage,
      link: "https://github.com/Tshimangadzostephen/Tshimaverse",
      demo: "https://tshimaverse.vercel.app",
      tags: ["React", "CSS", "Vite"],
    },
    {
      title: "Partial Stack Overflow Clone",
      description:
        "A basic Stack Overflow clone built with ASP.NET MVC 5 and SQL Server.",
      image:
        "https://datascientest.com/en/files/2024/03/Stackoverflow-768x422-1.jpg",
      link: "https://github.com/Tshimangadzostephen/StackOverflowProject",
      tags: ["C#", "MVC", "SQL Server"],
    },
    {
      title: "Krypto",
      description:
        "A conceptual Figma project exploring layout grids and gradients.",
      image: kryptoImage,
      demo:
        "https://www.figma.com/design/69BjYFdhr6alX1T5h2i7Be/KRYPTO-PROJECT",
      link: "",
      tags: ["Figma", "Grid", "Gradients"],
    },
    {
      title: "Inventory Management System",
      description:
        "RESTful API built with .NET Core, SQL Server and JWT authentication.",
      image:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/t-com_netcore_770px.png",
      link: "",
      tags: ["C#", "Swagger", "SQL Server", "EF"],
    },
  ];

  return (
    <section className="projects-section section">
      <h2 className="projects-heading">Featured Projects</h2>

      <div className="projects-wrapper">
        <Swiper
          modules={[Pagination]}
          loop
          grabCursor
          spaceBetween={16}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {projectData.map(project => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
