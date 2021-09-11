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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderJsx/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;