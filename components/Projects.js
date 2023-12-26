import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-center scroll-pt-24 pt-10 pb-6 mb-12"
    >
      <div className="mx-[10%] pb-2">
        <div className="text-xl sm:text-2xl text-white pb-6">Projects</div>
        <div className="pt-4 pb-2 flex flex-wrap justify-center px-2">
          <ProjectCard projects={projects} />
        </div>
      </div>
    </section>
  );
}
