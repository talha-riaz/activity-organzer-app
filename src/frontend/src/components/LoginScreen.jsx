import React from 'react';
import {connect} from 'react-redux';
import './LoginScreen.css';
import * as mutations from '../store/mutations';

function LoginComponent({authenticateUser, authenticated}) {
return (
<div className="Login">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 d-none d-md-block">
        <img src={require('../assets/phone.png')} class="phone" />
      </div>
      <div class="col-sm-6">
        <div class="right-column d-block text-center">
          <img src={require('../assets/insta.png')} class="insta" />
          <p class="info">Sign up to see photos and videos from your friends.</p>
          <form class="login-form" onSubmit={authenticateUser}>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Username" name="username"></input>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" name="password"></input>
            </div>
            <div class="button-div">
              <button type="submit" class="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
        </div>
        <div class="right-column-under text-center">
          <p class="signup-info">Don't have an account? <a href="/signup" style={{color:"blue"}}>Sign up</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

const mapStateToProps = (state) => (
{
authenticated: state.session.authenticated
}
)

const mapDispatchToProps = (dispatch) => {
return (
{
authenticateUser(e) {
e.preventDefault();
const username = e.target[`username`].value;
const password = e.target[`password`].value;
dispatch(mutations.requestAuthenticateUser(username, password));
}
});
}

export const ConnectedLogin = connect (mapStateToProps, mapDispatchToProps) (LoginComponent);