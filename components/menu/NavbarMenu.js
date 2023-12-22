import MenuLink from "./MenuLink";
import { motion } from "framer-motion";
import { list } from "./list";

export default function MenuList() {
  return (
    <ul className="hidden sm:flex">
      {list.map((element) => (
        <MenuLink key={element.id} id={element.id}>
          <motion.li
            //initial={{ scale: 0 }}
            //animate={{ scale: 1, transition: { type: "spring", duration: 3 } }}
            whileHover={{
              scale: 1.2,
              color: ["#F9F7F0", "white"],
            }}
            whileTap={{ scale: 1, transition: { stiffness: 400, damping: 17 } }}
            className="cursor-pointer ml-10 uppercase text-xl text-cream"
          >
            {element.name}
          </motion.li>
        </MenuLink>
      ))}
    </ul>
  );
}
