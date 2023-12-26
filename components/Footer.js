import { AiOutlineGithub } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-blue text-white px-[10%] mt-6 pt-6 pb-4">
      <div className="text-center text-sm">
        Created with{" "}
        <a className="underline" href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
      </div>
      <div className="text-center text-sm">
        Source code on{" "}
        <a
          className="underline"
          href="https://github.com/patricia-026/portfolio"
          target="_blank"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
