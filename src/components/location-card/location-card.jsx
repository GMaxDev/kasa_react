import style from "./location-card.module.scss";

export default function LocationCard({locationTitle}) {
  return (
    <div className={`${style.locationCard}`}>
      <img src=" " alt="" />
      <h3>{locationTitle}</h3>
    </div>
  );
}
