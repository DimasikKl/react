import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img className={s.image}
             src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.fullName}>{props.profile.fullName}</div>
        <img className={s.ava} src={props.profile.photos.large}/>
        <div><span className={s.bold}>Обо мне:</span> {props.profile.aboutMe}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;