import React from "react";
import './App.css';
import HeaderJsx from "./components/Header/Header1.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderJsx/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/> }/>
          <Route path='/news' render={ () => <News/> }/>
          <Route path='/music' render={ () => <Music/> }/>
          <Route path='/settings' render={ () => <Settings/> }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; 