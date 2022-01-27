import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src= 'https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png'/>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
        : <NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;