import Image from "next/image";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { getImageUrl } from "@/utils";

export default function ProjectCard({ projects }) {
  return projects.map((project, id) => {
    return (
      <div
        id="projects"
        key={id}
        className="bg-dark-blue grid justify-between rounded-xl p-4 w-full sm:w-56 md:w-64 lg:w-80 m-2 shadow-sm shadow-cream/50 hover:shadow-md hover:shadow-cream/50 duration-200 hover:scale-105"
      >
        <div>
          <div className="text-cream pb-4 pt-2">{project.title}</div>
          <Image
            src={getImageUrl(project.image)}
            width={0}
            height={0}
            alt={project.title}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="px-2 pb-4 min-w-full"
          />
          <div className="text-cream pb-4 mb-6 px-2">{project.description}</div>
        </div>
        <div className="w-full grid content-end">
          <div className="text-cream flex flex-wrap w-full mb-2 px-2">
            {project.technologies.map((technology, techId) => {
              return (
                <div key={techId} className="p-1 w-10">
                  <Image
                    key={techId}
                    src={getImageUrl(technology.image)}
                    width={0}
                    height={0}
                    alt={technology.title}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="py-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end m-2">
            <AiOutlineLink
              size={30}
              className="cursor-pointer text-cream mr-2"
            />
            <AiOutlineGithub size={30} className="cursor-pointer text-cream" />
          </div>
        </div>
      </div>
    );
  });
}
