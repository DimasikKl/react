import React from "react";
import Header1 from "./Header1";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return(
      <Header1 {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);