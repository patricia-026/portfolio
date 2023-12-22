import skills from "../data/skills.json";
import { getImageUrl } from "@/utils";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-center scroll-pt-24 bg-grey-blue pt-10 pb-6"
    >
      <div className="mx-[10%] pb-2">
        <div className="text-xl sm:text-2xl text-cream">Skills</div>
        <div className="pt-4 pb-2 flex flex-wrap items-center justify-center px-2">
          {skills.map((skill, id) => {
            return (
              <div
                key={id}
                className="bg-dark-blue grid place-items-center rounded-xl p-2 w-20 h-20 md:w-32 md:h-32 m-2 shadow-sm shadow-cream/50 hover:shadow-md hover:shadow-cream/50 duration-200 hover:scale-105"
              >
                <Image
                  src={getImageUrl(skill.image)}
                  width={0}
                  height={0}
                  alt={skill.title}
                  sizes="100vw"
                  style={{ width: "50%", height: "auto" }}
                  className="pt-1"
                />
                <p className="text-cream text-xs md:text-base">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
