import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";

export default function Logo({ ...props }) {
  return (
    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 3 }}
      >
        <Image
          src={logo}
          alt="Logo"
          className="cursor-pointer w-auto max-h-16"
          priority
          {...props}
        />
      </motion.div>
    </Link>
  );
}
