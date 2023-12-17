import MenuLink from "./MenuLink";
import { motion } from "framer-motion";
import { list } from "./list";

export default function MenuList() {
  return (
    <ul className="hidden sm:flex">
      {list.map((element) => (
        <MenuLink key={element.id} id={element.id}>
          <motion.li
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
              color: ["black", "red"],
            }}
            transition={{ type: "spring", duration: 1.5 }}
            className="cursor-pointer ml-10 uppercase text-xl"
          >
            {element.name}
          </motion.li>
        </MenuLink>
      ))}
    </ul>
  );
}
