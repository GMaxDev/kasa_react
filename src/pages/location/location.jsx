import { useParams } from "react-router-dom";
import DataContentBloc from "../../components/data-content-bloc/data-content-bloc";
import locationInfo from "../../data/logements.json";
import style from "./location.module.scss";

export default function Location() {
  const { id } = useParams(); // On récupère l'ID
  const dataLocation = locationInfo.find((item) => item.id === id);
  console.log(dataLocation);

  const rating = parseInt(dataLocation.rating);

  return (
    <div className="mainContainer">
      <div className={style.carroussel}></div>
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
            {Array.from({ length: rating }, (_, index) => (
              <p key={index}>0</p>
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
    </div>
  );
}
