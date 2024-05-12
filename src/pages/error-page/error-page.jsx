import style from "./error-page.module.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className= {style.errorPageContent} >
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n&apos;existe pas</h2>
          <Link className={style.homepageReturn} to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
      </div>
    <Footer />
    </>
  );
}
