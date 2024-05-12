import style from "./lcoation.module.scss";

export default function location() {
  return (
    <div className="mainContainer">
      <div className={style.carroussel}></div>
      <div className={style.titleLocationTagBloc}></div>
      <div className={style.profilRatingBloc}></div>
    </div>
  );
}
