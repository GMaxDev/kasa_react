import AboutContentBloc from "../../components/about-content-bloc/about-content-bloc";
import style from "./about.module.scss";
import blocInfo from "../../data/about-infos.json";

export default function About() {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.banner}`}>
      </div>
      {blocInfo.map((info, index) => (
        <AboutContentBloc key={index} titleBloc={info.title} contentBloc={info.description} />
      ))}
    </div>
  );
}
