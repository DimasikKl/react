import preloader from "../../../assets/svg/preloader.png";
import React from "react";

let Preloader = () => {
  return <div style={ {backgroundColor: 'burlywood'} }>
    <img src={preloader}/>
  </div>
}

export default Preloader;