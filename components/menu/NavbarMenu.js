import MenuLink from "./MenuLink";
import { motion } from "framer-motion";
import list from "../../data/menuList";

export default function MenuList() {
  return (
    <ul className="hidden sm:flex justify-center">
      {list.map((element) => (
        <MenuLink key={element.id} id={element.id}>
          <motion.li
            //initial={{ scale: 0 }}
            //animate={{ scale: 1, transition: { type: "spring", duration: 3 } }}
            whileHover={{
              scale: 1.2,
              color: ["white", "#007BFF"],
            }}
            whileTap={{ scale: 1, transition: { stiffness: 400, damping: 17 } }}
            className="cursor-pointer ml-10 uppercase text-xl text-white"
          >
            {element.name}
          </motion.li>
        </MenuLink>
      ))}
    </ul>
  );
}
