import style from "./content.module.scss";
import LocationCard from "../location-card/location-card";
import locationInfo from "../../data/logements.json";

export default function Content() {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.banner}`}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={`${style.cardZone}`}>
        {locationInfo.map((info, index) => (
        <LocationCard key={index} locationTitle={info.title} locationPicture={info.pictures[0]}/>
      ))}
      </div>
    </div>
  );
}
