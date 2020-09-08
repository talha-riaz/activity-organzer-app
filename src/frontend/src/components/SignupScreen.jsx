import React from 'react';
import './SignupScreen.css';
import {connect} from 'react-redux';
import * as mutations from '../store/mutations';

function Signup({requestSignupUser, error}) {
  return (
    <div className="Login">
      <div class="container-signup">
          <div class="col-sm-12 vertical-center">
            <div class="right-column-test text-center">
              {/* <img src={require('../assets/insta.png')} class="insta"/> */}
              <h1>Sign up</h1>
              <p class="info">Sign up for your personal account.</p>
              <form class="login-form" onSubmit={requestSignupUser}>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Nickname" name="nickname"></input>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Username" name="username"></input>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" name="password"></input>
                  {<p class="signup-error">{error}</p>}
                </div>
                <div class="button-div">
                  <button type="submit" class="btn btn-dark btn-block">Sign up</button>
                </div>
              </form>
            </div>
            <div class="right-column-under-signup text-center">
              <p class="signup-info">Already have an account? <a href="/">Log in</a></p>           
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => (
  {   
      error: state.session.error
  }
)

const mapDispatchToProps = (dispatch) => {
  return (
      {
          requestSignupUser(e) {
              e.preventDefault();
              const nickname = e.target[`nickname`].value;
              const username = e.target[`username`].value;
              const password = e.target[`password`].value;
              dispatch(mutations.requestSignUp(nickname, username, password));
          }
      }
  );
}

export const ConnectedSignup = connect (mapStateToProps, mapDispatchToProps) (Signup);
