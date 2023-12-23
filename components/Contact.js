import { AiOutlineGithub } from "react-icons/ai";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="flex scroll-pt-24 bg-grey-blue">
      <div className="mb-16 mx-[10%] w-full ">
        <div className="pb-6 pt-2 sm:my-auto grid justify-center">
          <div className="text-3xl pb-4 mx-auto text-white">CONTACT</div>
          <div className="mx-auto text-white">
            Feel free to get in touch with me
          </div>
        </div>
        <div className="flex gap-4 mx-auto max-w-3xl mt-4 md:mt-8 justify-center flex-wrap">
          <ContactCard text={"Github"}>
            <AiOutlineGithub
              size={30}
              className="cursor-pointer text-white mx-auto"
            />
          </ContactCard>
          <ContactCard text={"xxxxxx.xxxxx@gmail.com"}>
            <AiOutlineGithub
              size={30}
              className="cursor-pointer text-white mx-auto"
            />
          </ContactCard>
          <ContactCard text={"Linkedin"}>
            <AiOutlineGithub
              size={30}
              className="cursor-pointer text-white mx-auto"
            />
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
