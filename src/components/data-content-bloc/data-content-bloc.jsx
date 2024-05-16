import { useState } from "react";
import style from "./data-content-bloc.module.scss";

export default function DataContentBloc({ titleBloc, contentBloc }) {
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const handleArrowClick = () => setIsArrowRotated(!isArrowRotated);

  return (
    <div className={style.content}>
      <div className={style.titleZone} onClick={handleArrowClick}>
        <h2>{titleBloc}</h2>
        <img
          src="../../src/img/arrow.svg"
          alt="Flèche"
          className={`${style.arrow} ${isArrowRotated ? style.arrowRotated : ""}`}
        />
      </div>
      <div className={`${style.contentBlocZone} ${isArrowRotated ? style.textTranslate : ""}`}>
        {contentBloc}
      </div>
    </div>
  );
}
