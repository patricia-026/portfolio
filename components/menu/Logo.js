import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Logo({ ...props }) {
  return (
    <div className="mx:0 sm:mx-auto md:mx-0 items-center w-fit py-0 sm:py-4 md:py-0">
      <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 3 }}
        >
          {/*          <Image
          src={logo}
          alt="Logo"
          className="cursor-pointer w-auto max-h-16"n
          priority
          {...props}
        />  */}
          <p className="w-fit text-white text-xl cursor-pointer select-none mx-auto">
            &lt;PatriciaKovacs/&gt;
          </p>
        </motion.div>
      </Link>
    </div>
  );
}
