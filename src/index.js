import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'hello world!', likeCount: 12},
  {id: 2, message: 'hi', likeCount: 55},
  {id: 3, message: 'hello russion!', likeCount: 0},
];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={Dialogs} messages={Messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
