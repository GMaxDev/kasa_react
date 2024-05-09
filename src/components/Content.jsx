import style from "../assets/styles/Content.module.scss";
import LocationCard from "./LocationCard";

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
