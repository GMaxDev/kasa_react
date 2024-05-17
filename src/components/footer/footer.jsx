import style from "./footer.module.scss";
import logoWhite from "../../img/LOGO_white.svg";

export default function Footer() {
  return <div className={`${style.footer}`}>
    <img src={logoWhite} alt="kasa logo" />
    <h2>© 2024 Kasa. All rights reserved</h2>
    </div>;
}

