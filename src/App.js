import React from "react";
import './App.css';
import HeaderJsx from "./components/Header/Header1.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderJsx/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={ () => <DialogsContainer/> }/>
          <Route path='/profile'
                 render={ () => <Profile /> }/>
          <Route path='/users'
                 render={ () => <UsersContainer />}/>
          <Route path='/news' render={ () => <News/> }/>
          <Route path='/music' render={ () => <Music/> }/>
          <Route path='/settings' render={ () => <Settings/> }/>
        </div>
      </div>
  );
}

export default App;