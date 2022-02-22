import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-stor";
import {withSuspense} from "./hoc/withSuspense";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    catchAllUnhandleErrors = (promiseRejectionEvent) => {
        alert('some error');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/'
                            render={() => <Redirect to={'/profile'} />} />
                        <Route path='/dialogs'
                            render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)} />
                        <Route path='/users'
                            render={() => <UsersContainer/>}/>
                        <Route path='/news'
                            render={() => <News/>}/>
                        <Route path='/music'
                            render={() => <Music/>}/>
                        <Route path='/settings'
                            render={() => <Settings/>}/>
                        <Route path='/login'
                            render={() => <LoginPage/>}/>
                        <Route path='*'
                        render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp;