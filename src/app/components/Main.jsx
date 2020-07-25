import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard} from './Dashboard'
import { Router, Route, Redirect} from 'react-router-dom'
import { history } from '../store/history'
import { ConnectedNavigation } from './Navigation'
import { ConnectedTaskDetail } from './TaskDetail'
import { ConnectedLogin } from './Login'

const RouteGuard = Component => ({match}) => {
    if(!store.getState().session.authenticated){
        return <Redirect to="/" />
    }
    else {
        return <Component match={match}></Component>
    }
}

export const Main = () => {
    return (    
    <Router history = {history}> 
        <Provider store = {store}>
            <div>
                {/*<ConnectedDashboard />*/ }
                <ConnectedNavigation />
                <Route 
                exact 
                path="/" 
                component={ConnectedLogin} 
                />
                <Route 
                exact 
                path="/dashboard" 
                render={ RouteGuard(ConnectedDashboard)}
                />
                <Route
                exact
                path="/task/:idInLink"
                render={RouteGuard(ConnectedTaskDetail)}
                />
            </div>
        </Provider>    
    </Router>
    );
}
    