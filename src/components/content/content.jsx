import style from "./content.module.scss";
import { Link } from "react-router-dom";
import LocationCard from "../location-card/location-card";
import locationInfo from "../../data/logements.json";

export default function Content() {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.banner}`}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={`${style.cardZone}`}>
        {locationInfo.map((info) => (
          <Link key={info.id} to={`/location/${info.id}`}>
            <LocationCard
              locationTitle={info.title}
              locationPicture={info.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
