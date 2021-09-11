import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = 'dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  const DialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Oleg'},
  ];

  const MessagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'bay'},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
      </div>
      <div className={s.messages}>
        <Message message={MessagesData[0].message}/>
        <Message message={MessagesData[1].message}/>
        <Message message={MessagesData[2].message}/>
      </div>
    </div>
  )
}

export default Dialogs;