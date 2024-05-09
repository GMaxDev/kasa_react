import style from "../assets/styles/Header.module.scss";

export default function Header() {
  return <div className={`${style.header}`}>
    <img src="/src/img/LOGO.svg" alt="kasa logo" />
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">A Propos</a></li>
    </ul>
    </div>;
}
