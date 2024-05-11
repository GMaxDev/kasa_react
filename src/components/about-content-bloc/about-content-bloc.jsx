import { useState } from "react";
import style from "./about-content-bloc.module.scss";

export default function AboutContentBloc({titleBloc, contentBloc}) {
  const [isArrowRotated, setIsArrowRotated] = useState(false)

  const handleArrowClick = () => setIsArrowRotated(!isArrowRotated)

  return <div className={`${style.content}`}>
    <div className={style.titleZone} onClick={handleArrowClick}>
      <h2>{titleBloc}</h2>
      <img src="./src/img/arrow.svg" alt="Flèche pointant vers le haut" className={`${style.arrow} ${isArrowRotated ? style.arrowRotated : ''}`}/>
    </div>
    <p className={`${style.arrow} ${isArrowRotated ? style.textTranslate : ''}`}>{contentBloc}</p>
  </div>;
}
