import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import MenuLink from "./MenuLink";
import list from "../../data/menuList";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";

export default function HamburgerMenu({ closeMenu, menuOpen }) {
  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", duration: 0.3 }}
            className="rounded-3xl mx-auto my-4 w-full sm:hidden bg-dark-blue p-10"
          >
            <div className="py-4">
              <motion.ul
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  exit: { transition: { staggerChildren: 0.05 } },
                }}
                /* exit={{ transition: { staggerChildren: 0.05 } }} */
                className="text-3xl text-center"
              >
                {list.map((element) => (
                  <MenuLink key={element.id} id={element.id}>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                        exit: { opacity: 1, x: 0 },
                      }}
                      transition={{ type: "spring" }}
                      onClick={closeMenu}
                      className="py-4 cursor-pointer text-white"
                    >
                      {element.name}
                    </motion.li>
                  </MenuLink>
                ))}
              </motion.ul>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                exit: { opacity: 1 },
              }}
              transition={{ type: "spring", duration: 2 }}
              className="flex items-center justify-center pt-2 pb-4"
            >
              <a href={"https://github.com/patricia-026"} target="_blank">
                <AiOutlineGithub size={30} className="mx-2 text-white" />
              </a>
              <a
                href={"https://www.linkedin.com/in/kovacs-patricia/"}
                target="_blank"
              >
                <AiOutlineLinkedin
                  size={30}
                  className="cursor-pointer mx-2 text-white"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
