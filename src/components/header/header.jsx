import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className={`${style.header}`}>
      <img className={style.logo} src="src/img/LOGO.svg" alt="kasa logo" />
      <ul>
        <li className={location.pathname === "/" ? style.active : ""}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={location.pathname === "/about" ? style.active : ""}>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}
