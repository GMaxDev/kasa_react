import style from "./content.module.scss";
import LocationCard from "../location-card/location-card";

export default function Content() {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.banner}`}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={`${style.cardZone}`}>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
}
