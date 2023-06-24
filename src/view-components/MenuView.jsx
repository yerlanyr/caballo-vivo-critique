import { Link } from "react-router-dom";

export default function MenuView({toggleMenu, show, links}) {
  return <>
    <button onClick={toggleMenu}>Toggle menu</button>
    {show && (
      <nav>
        <ul>
        {links.map((link, i) => <li key={i}><Link to={link.to}>{link.title}</Link></li>)}
        </ul>
      </nav>
    )}
  </>;
}
