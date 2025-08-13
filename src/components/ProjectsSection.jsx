import React from "react";
import { ArrowRight, Github } from "lucide-react";

// 1. Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// 2. Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 3. Import Project Images
import Img1 from "@/assets/projects/KHype.png";
import Img2 from "@/assets/projects/DormApp.png";
import Img3 from "@/assets/projects/EmoCheck.png";
import Img4 from "@/assets/projects/Enrollment.png";
import Img5 from "@/assets/projects/RiskAnalyze.png";
import Img6 from "@/assets/projects/RDIglobal.png";
import Img7 from "@/assets/projects/MediLink.png";

const projects = [
  {
    id: 1,
    title: "K-Hype Website",
    description: "A platform for K-Pop fans to stay updated with their favorite idols content",
    image: Img1,
    tags: ["HTML", "CSS", "JavaScript"],
    docUrl: "https://docs.google.com/document/d/16UCwmuekxbjhlOb2Xyr2Gsxc9Ho1heUR/edit?usp=sharing&ouid=103600642493022402933&rtpof=true&sd=true",
    githubUrl: "https://github.com/coenflour/K-Hype-Website",
  },
  {
    id: 2,
    title: "Dormitory Admin App",
    description: "An OOVP GUI application for managing dormitory operations",
    image: Img2,
    tags: ["Java", "Netbeans", "GUI", "OOVP"],
    docUrl: "https://docs.google.com/document/d/19CxuK9nxN6MgH2nrAC4dVGMbNdQuj6VgYh0SAjUDL_U/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "EmoCheck! Mental Health ChatBot",
    description: "An android app mental health chatbot that provides emotional support",
    image: Img3,
    tags: ["Android Studio", "Java", "Kotlin", "AI ChatBot"],
    docUrl: "https://docs.google.com/document/d/1JShA1YQqEDHcCdctoeC9tUA51lmsDOuSv2XZwvdXDF4/edit?usp=sharing",
    githubUrl: "https://github.com/coenflour/EmoCheckApp",
  },
  {
    id: 4,
    title: "Student Enrollment App",
    description: "An android app for managing student enrollment processes",
    image: Img4,
    tags: ["Android", "Flutter", "Dart"],
    docUrl: "https://docs.google.com/document/d/1z2-qQsiuNLzrLqIJmrYythSanZLtfLkhJhh2wED7YM8/edit?usp=sharing",
    githubUrl: "https://github.com/coenflour/Student_Enrollment_New",
  },
  {
    id: 5,
    title: "RiskAnalayze",
    description: "Security risk assessment website with threat intelligence detector to help companies and instances regularly secure their assets. The website was created by integrating Octave Allegro method",
    image: Img5,
    tags: ["JavaScript", "React.js", "CSS"],
    docUrl: "https://docs.google.com/document/d/1CoWq3OGI7ukoJY9ZDfnUQ873KhS1evsa/edit?usp=sharing&ouid=103600642493022402933&rtpof=true&sd=true",
    githubUrl: "https://github.com/coenflour/Security-Risk-Assessment",
  },
  {
    id: 6,
    title: "Resilience Development Initiative (RDI)",
    description: "Main RDI website and the sub domain Participatory Action and Community Empowerment (PACE)",
    image: Img6,
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    docUrl: "https://staging.rdiglobal.org/articles?page=1",
    githubUrl: "https://pace.rdiglobal.org/",
  },
  {
    id: 7,
    title: "MediLink",
    description: "KADA Capstone project website to automate various administrative and clinical processes within a healthcare facility",
    image: Img7,
    tags: ["React.js", "Node.js", "TailwindCSS", "MongoDB"],
    docUrl: "https://docs.google.com/document/d/16kE51jppCyhEaVRMO69dlQvMHy-MbRXJoYYRiqltvfg/edit?usp=sharing",
    githubUrl: "https://github.com/wiliboldaffrial/MediLink",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl"> {/* Increased max-width for carousel */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* 4. Replaced the grid div with the Swiper component */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          className="my-12"
        >
          {projects.map((project) => (
            // 5. Each project is wrapped in a SwiperSlide
            <SwiperSlide key={project.id}>
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* 6. Replaced icon links with explicit buttons */}
                  <div className="flex justify-start items-center gap-4 mt-auto">
                    <a
                      href={project.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Documentation
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border rounded-md hover:bg-secondary transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/coenflour"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};