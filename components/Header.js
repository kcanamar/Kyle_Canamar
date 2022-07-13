import about from "../data/about";
import { ALink, Menu, NavBar, SubLink, Title } from "../styled_components/header";
import Link from "next/link";

function Header(props) {
  return (
    <NavBar>
      <Title>{about.logo}</Title>
      <Menu>
          <Link href="/blog"><SubLink>Blog</SubLink></Link>
          <ALink href={about.github}><i className="fa-brands fa-github-alt fa-3x"></i></ALink>
          <ALink href={about.linkedIn}><i className="fa-brands fa-linkedin-in fa-3x"></i></ALink>
      </Menu>
    </NavBar>
  );
}

export default Header;
