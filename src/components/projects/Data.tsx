// src/data/projects.ts
import portfolioImage from "../../assets/portfolio_design.png";
import kryptoImage from "../../assets/kryto.png";
import MovieFlixImg from "../../assets/movies.png";
import atmImg from "../../assets/atm.png";


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
        title: "ATM Banking System Simulator",
        slug: "atm-banking-system",
        description:
            "A Windows HTA ATM simulator implementing an NDC-style state machine with realistic transaction flows and device simulations.",
        image: atmImg,
        link: "https://github.com/Tshimangadzostephen/ATM-Banking-System",
        demo: "", // optional
        tags: ["HTML", "CSS", "JavaScript", "Windows HTA", "State Machine", "ISO-8583", "ActiveX"],
        caseStudy: {
            heroTitle: "ATM Banking System Simulator",
            overview:
                "A realistic ATM simulator built for testing and learning. It models a full NDC-style state machine and simulates devices like card reader, PIN pad, network authorization, and cash dispensing.",
            highlights: [
                "NDC-style state machine architecture (each screen is a state)",
                "End-to-end cash withdrawal, balance inquiry, fast cash, mini statement flows",
                "Security rules: PIN masking, 3-attempt lockout + card retention, timeouts",
                "Device simulations: card reader, keypad, cash dispenser, printer, network",
                "ISO-8583-style host message simulation with response codes (00, 51, 61, 91)",
            ],
            techStack: [
                "HTML/CSS/JavaScript",
                "Windows HTA (HTML Application Host)",
                "State-based routing via index.hta + iframe state loader",
                "Mock controllers: GrgApp, GrgDataPool, GrgNetwork",
            ],
            sections: [
                {
                    title: "Problem",
                    body: [
                        "Create a realistic ATM experience for training/testing without real banking infrastructure.",
                        "Support multiple transactions and edge cases (timeouts, insufficient funds, limits, device issues).",
                    ],
                },
                {
                    title: "Approach",
                    body: [
                        "Implemented a state-driven architecture inspired by NDC where each screen is its own state HTML file.",
                        "Centralized state transitions through a container (index.hta) that loads states into an iframe.",
                        "Built mock controllers for state management, transaction data, and network authorization simulation.",
                    ],
                },
                {
                    title: "Transaction Flows",
                    body: [
                        "Cash Withdrawal (User Journey)\nIdle → Card Read → PIN Entry → Choose Transaction → Enter Amount → Bank Authorization → Dispense Cash → Finish\n(000 → 136 → 137 → 141 → 395 → 789 → 907 → 909)\n\n",

                        "Balance Inquiry (User Journey)\nIdle → Card Read → PIN Entry → Choose Transaction → Bank Authorization → Show Balance → Finish\n(000 → 136 → 137 → 141 → 789 → 766 → 909)\n\n",

                        "Fast Cash (User Journey)\nIdle → Card Read → PIN Entry → Choose Fast Cash → Bank Authorization → Dispense Cash → Finish\n(000 → 136 → 137 → 141 → 395 → 789 → 907 → 909)",
                    ],


                },
                {
                    title: "Security & Rules",
                    body: [
                        "Masked PIN input and validation with limited attempts.",
                        "Session timeouts per state and safe recovery back to idle.",
                        "Daily limit enforcement and balance validation before dispensing cash.",
                        "Card retention simulation after repeated PIN failure.",
                    ],
                },
                {
                    title: "What I’d Improve Next",
                    body: [
                        "More detailed receipt formatting and print simulation.",
                        "Better test harness + scenario runner (automated state navigation).",
                        "Additional failure states (cash jam, network retries, partial dispense).",
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
