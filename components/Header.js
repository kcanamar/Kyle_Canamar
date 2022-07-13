import about from "../data/about";
import { ALink, Menu, NavBar, SubLink, Title } from "../styled_components/header";
import Link from "next/link";

function Header(props) {
  return (
    <NavBar>
      <Link href="/"><SubLink><Title>{about.logo}</Title></SubLink></Link>
      <Menu>
          <Link href="/"><SubLink><i class="fa-solid fa-house"></i></SubLink></Link>
          <Link href="/blog"><SubLink><i className="fa-solid fa-blog"></i></SubLink></Link>
          <Link href="/portfolio"><SubLink><i class="fa-solid fa-briefcase"></i></SubLink></Link>
          <ALink href={about.github}><i className="fa-brands fa-github-alt fa-3x"></i></ALink>
          <ALink href={about.linkedIn}><i className="fa-brands fa-linkedin-in fa-3x"></i></ALink>
      </Menu>
    </NavBar>
  );
}

export default Header;
