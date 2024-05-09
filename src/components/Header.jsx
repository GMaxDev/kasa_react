import style from "../assets/styles/Header.module.scss";

export default function Header() {
  return <div className={`${style.header}`}>
    <img src="/src/img/LOGO.svg" alt="kasa logo" />
    <ul>
      <li>Accueil</li>
      <li>A Propos</li>
    </ul>
    </div>;
}
