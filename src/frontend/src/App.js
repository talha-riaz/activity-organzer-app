import React from 'react';
import './App.css';
import {ConnectedLogin} from './components/LoginScreen'
import {ConnectedSignup} from './components/SignupScreen'
import {Router, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import {store} from './store';
import {getSessionState} from './store/userSession'

const DashboardRouteGuard = Component => ({match}) => {
    if(!(getSessionState()==='active')){
      //alert("You must login to view this resource.")
      return <Redirect to="/" />
  }
  else {
      return <Component match={match}></Component>
  }
}

const LoginRouteRedirector = Component => ({match}) => {
  if(getSessionState()==='active'){
    return <Redirect to="/dashboard" />
}
else {
    return <Component match={match}></Component>
}
}

function App() {
  return (
      <div className="App">
          <div>
                <Route 
                exact 
                path="/" 
                component={LoginRouteRedirector(ConnectedLogin)} 
                />
                <Route 
                path="/dashboard" 
                component={withRouter(DashboardRouteGuard(Dashboard))}
                />
                <Route 
                exact 
                path="/signup" 
                component={ConnectedSignup}
                />
            </div>
    </div>
  );
}

export default App;
