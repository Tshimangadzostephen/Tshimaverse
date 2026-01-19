// src/data/projects.ts
import portfolioImage from "../../assets/portfolio_design.png";
import kryptoImage from "../../assets/kryto.png";
import MovieFlixImg from "../../assets/movies.png";

export interface CaseStudySection {
  title: string;
  body: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  demo?: string;
  link: string;
  tags: string[];
  caseStudy?: {
    heroTitle?: string;
    overview: string;
    highlights: string[];
    techStack: string[];
    sections: CaseStudySection[];
  };
}

export const projects: ProjectItem[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description: "A personal portfolio website built with React, CSS and Vite.",
    image: portfolioImage,
    link: "https://github.com/Tshimangadzostephen/Tshimaverse",
    demo: "https://tshimaverse.vercel.app",
    tags: ["React", "CSS", "Vite"],
    caseStudy: {
      heroTitle: "Personal Portfolio",
      overview:
        "A responsive portfolio built to showcase projects, skills, and contact details with smooth animations and a clean layout.",
      highlights: [
        "Responsive project showcase carousel",
        "GSAP scroll animations for a polished feel",
        "Simple structure that’s easy to extend",
      ],
      techStack: ["React", "Vite", "CSS", "GSAP"],
      sections: [
        {
          title: "Problem",
          body: [
            "I needed a clean place to showcase my projects and links in a way that feels modern and professional.",
          ],
        },
        {
          title: "Solution",
          body: [
            "Built a fast, responsive portfolio with a clear structure and smooth animations for the key sections.",
          ],
        },
      ],
    },
  },
  {
    slug: "krypto",
    title: "Krypto",
    description: "A conceptual Figma project exploring layout grids and gradients.",
    image: kryptoImage,
    demo: "https://www.figma.com/design/69BjYFdhr6alX1T5h2i7Be/KRYPTO-PROJECT",
    link: "",
    tags: ["Figma", "Grid", "Gradients"],
  },
  {
    slug: "stack-overflow-clone",
    title: "Partial Stack Overflow Clone",
    description: "A basic Stack Overflow clone built with ASP.NET MVC 5 and SQL Server.",
    image: "https://datascientest.com/en/files/2024/03/Stackoverflow-768x422-1.jpg",
    link: "https://github.com/Tshimangadzostephen/StackOverflowProject",
    tags: ["C#", "MVC", "SQL Server"],
  },
  {
    slug: "movieflix",
    title: "MovieFlix",
    description:
      "A React Native movie app featuring search, trending movies, and a saved collection powered by the TMDB API.",
    image: MovieFlixImg,
    demo: "",
    link: "https://github.com/Tshimangadzostephen/movie_app",
    tags: ["Expo", "React Native", "TMDB API", "TypeScript"],
    caseStudy: {
      heroTitle: "MovieFlix",
      overview:
        "A mobile movie discovery app that lets users browse trending titles, search movies, view details, and save favorites.",
      highlights: [
        "Trending + latest browsing experience",
        "Search flow with clean results UI",
        "Saved collection to track favorites",
        "Details screen with key metadata",
      ],
      techStack: ["Expo", "React Native", "TypeScript", "TMDB API"],
      sections: [
        {
          title: "Problem",
          body: [
            "I wanted a fast, clean way to discover movies on mobile with a modern UI and a simple user flow.",
          ],
        },
        {
          title: "Approach",
          body: [
            "Designed the app around the core actions: browse, search, view details, and save.",
            "Focused on a consistent dark theme with clear hierarchy and spacing.",
          ],
        },
        {
          title: "Implementation",
          body: [
            "Integrated TMDB endpoints for trending, search, and details.",
            "Built reusable components for movie cards and lists to keep the UI consistent.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "A smooth browsing experience with a clean design system and a practical feature set for a movie catalog app.",
          ],
        },
      ],
    },
  },
  {
    slug: "inventory-management-api",
    title: "Inventory Management System",
    description: "RESTful API built with .NET Core, SQL Server and JWT authentication.",
    image: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/t-com_netcore_770px.png",
    link: "",
    tags: ["C#", "Swagger", "SQL Server", "EF"],
  },
];
