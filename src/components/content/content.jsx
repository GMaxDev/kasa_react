import style from "./content.module.scss";
import LocationCard from "../location-card/location-card";

export default function Content() {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.banner}`}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={`${style.cardZone}`}>
        <LocationCard locationTitle="Titre de la location" />
        <LocationCard locationTitle="tata" />
        <LocationCard locationTitle="maison des fous" />
        <LocationCard locationTitle="charlie" />
        <LocationCard locationTitle="toto" />
      </div>
    </div>
  );
}
