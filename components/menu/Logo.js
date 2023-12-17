import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo({ ...props }) {
  return (
    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
      <Image
        src={logo}
        alt="Logo"
        className="cursor-pointer w-auto max-h-16"
        priority
        {...props}
      />
    </Link>
  );
}
