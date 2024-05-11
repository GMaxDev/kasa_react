import style from "./location-card.module.scss";

export default function LocationCard({locationTitle, locationPicture}) {
  return (
    <div className={`${style.locationCard}`}>
      <img src={locationPicture} alt="" />
      <h3>{locationTitle}</h3>
    </div>
  );
}
