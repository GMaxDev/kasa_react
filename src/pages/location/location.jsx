import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataContentBloc from "../../components/data-content-bloc/data-content-bloc";
import locationInfo from "../../data/logements.json";
import style from "./location.module.scss";

export default function Location() {
  const { id } = useParams(); // On récupère l'ID
  const dataLocation = locationInfo.find((item) => item.id === id);
  console.log(dataLocation);

  const rating = parseInt(dataLocation.rating);
  const allPictures = dataLocation.pictures.map((data) => data);
  console.log(dataLocation.pictures);

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const goToNextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === allPictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPreviousPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? allPictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={style.carroussel}>
        {allPictures.length > 1 && (
          <div className={style.arrowCarroussel}>
            <img
              className={`${style.arrow} ${style.arrowLeft}`}
              src="/src/img/arrow.svg"
              alt="Flêche gauche"
              onClick={goToPreviousPicture}
            />
            <img
              className={`${style.arrow} ${style.arrowRight}`}
              src="/src/img/arrow.svg"
              alt="Flêche droite"
              onClick={goToNextPicture}
            />
          </div>
        )}
        <img src={allPictures[currentPictureIndex]} alt="" />
        {allPictures.length > 1 && (
          <p>
            {currentPictureIndex + 1}/{allPictures.length}
          </p>
        )}
      </div>
      <div className={style.mainData}>
        <div className={style.titleLocationTagBloc}>
          <h1>{dataLocation.title}</h1>
          <h2>{dataLocation.location}</h2>
          <div className={style.tagZone}>
            <ul>
              {dataLocation.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.profilRatingZone}>
          <div className={style.profil}>
            <h3>{dataLocation.host.name}</h3>
            <img
              src={dataLocation.host.picture}
              alt={`Photo de profil de ${dataLocation.host.name}`}
            />
          </div>
          <div className={style.rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={`${style.sizeStar} fa-solid fa-star ${
                  index < rating ? style.coloredStar : style.grayStar
                }`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className={style.dataZone}>
        <DataContentBloc
          className={style.dataContent}
          titleBloc="Description"
          contentBloc={dataLocation.description}
        />
        <DataContentBloc
          className={style.dataContent}
          titleBloc="Equipements"
          contentBloc={dataLocation.equipments.map((info) => (
            <p key={info}>{info}</p>
          ))}
        />
      </div>
    </>
  );
}
