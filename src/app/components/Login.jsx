import React from 'react';
import {connect} from 'react-redux';
import * as mutations from '../store/mutations';

const LoginComponent = ({authenticateUser, authenticated}) => {
    return (
        <div>
            <h2>Please login...</h2>
            <form onSubmit={authenticateUser}>
                <input type="text" placeholder="username" name="username" defaultValue="Dev" />
                <input type="password" placeholder="password" name="password" defaultValue="" />
                {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p> : null}
                <button type="submit">Login</button>
            </form>    
        </div>
    )
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
        }
    );
}

export const ConnectedLogin = connect (mapStateToProps, mapDispatchToProps) (LoginComponent);