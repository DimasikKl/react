import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const Dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Oleg'},
  ];

  const Messages = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'bay'},
  ];

  let dialogsElements = Dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = Messages.map((m) => <Message message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;