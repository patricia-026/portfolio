import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import MenuLink from "./MenuLink";
import { list } from "./list";

export default function HamburgerMenu({ closeMenu, menuOpen }) {
  return (
    <>
      {menuOpen && (
        <div className="rounded-3xl mx-auto my-4 w-3/4 sm:hidden bg-white p-10">
          <div className="py-4">
            <ul className="text-3xl text-center">
              {list.map((element) => (
                <MenuLink key={element.id} id={element.id}>
                  <li onClick={closeMenu} className="py-4 cursor-pointer">
                    {element.name}
                  </li>
                </MenuLink>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center pt-2 pb-4">
            <AiOutlineGithub size={30} className="cursor-pointer mx-2" />
            <AiOutlineLinkedin size={30} className="cursor-pointer mx-2" />
          </div>
        </div>
      )}
    </>
  );
}
