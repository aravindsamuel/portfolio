import React from "react";
import "./projects.css";
import projectData from "../data/projectData";

const Projects = () => {
  return (
    <div className="Projects">
      <hr className="m-0" />
      <h1 className="projectsPageTitle">Projects</h1>
      <div className="projectsContainer">
        {projectData.map((project) => (
          <div className="projectItem">
            <div className="project_thumbnail">
              <img
                className="w-full h-full object-cover object-center rounded-lg"
                src={project.project_thumbnail}
                alt="Project Thumbnail"
              />
            </div>

            <h1 className="mt-2 font-bold text-lg">{project.project_title}</h1>
            <p className="text-xs text-stone-300">{project.project_desc}</p>

            <div className="techStack_container mt-2">
              {project.project_techStack.map((tech) => (
                <div className="techStack_used p-1">
                  <img
                    className="w-full h-full object-cover object-center rounded-lg"
                    src={tech}
                    alt="techStack"
                  />
                </div>
              ))}
            </div>

            <div className="button-container">
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm bg-[#7F27FF] rounded-md text-white">
                  view
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
