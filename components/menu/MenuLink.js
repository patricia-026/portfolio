import { Link } from "react-scroll";

export default function MenuLink({ id, children }) {
  return (
    <Link key={id} to={id} smooth={true} offset={-96} duration={50}>
      {children}
    </Link>
  );
}
