import style from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={`${style.header}`}>
      <img src="/src/img/LOGO.svg" alt="kasa logo" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          {/* <Link to="/about">A Propos</Link> */}
        </li>
      </ul>
    </div>
  );
}
