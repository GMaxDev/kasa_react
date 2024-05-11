import style from "./footer.module.scss";

export default function Footer() {
  return <div className={`${style.footer}`}>
    <img src="/src/img/LOGO_white.svg" alt="kasa logo" />
    <h2>© 2024 Kasa. All rights reserved</h2>
    </div>;
}

