import style from "../assets/styles/Footer.module.scss";

export default function Footer() {
  return <div className={`${style.footer}`}>
    <img src="/src/img/LOGO.svg" alt="kasa logo" />
    <h2>© 2024 Kasa. All rights reserved</h2>
    </div>;
}

