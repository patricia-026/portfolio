import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="flex scroll-pt-24">
      <div className="mb-16 mx-[10%] w-full ">
        <div className="pb-6 pt-2 sm:my-auto grid justify-center">
          <div className="text-3xl mx-auto text-white pb-6">Contact</div>
          <div className="mx-auto text-white">
            Feel free to get in touch with me
          </div>
        </div>
        <div className="flex gap-4 mx-auto max-w-3xl mt-4 md:mt-8 justify-center flex-wrap">
          <ContactCard text={"Github"} link={"https://github.com/patricia-026"}>
            <AiOutlineGithub size={30} className=" text-white mx-auto" />
          </ContactCard>
          <ContactCard
            text={"kovach.patri@gmail.com"}
            link={"mailto:kovach.patri@gmail.com"}
          >
            <AiOutlineMail size={30} className="text-white mx-auto" />
          </ContactCard>
          <ContactCard
            text={"Linkedin"}
            link={"https://www.linkedin.com/in/kovacs-patricia/"}
          >
            <AiOutlineLinkedin size={30} className="text-white mx-auto" />
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
