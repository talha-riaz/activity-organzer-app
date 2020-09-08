import React from 'react';
import NavBar from './NavBar';
import './Dashboard.css';
import Widget from './Widget';
import {ConnectedGroupBoard} from './GroupBoard'
import Footer from './Footer';
import {Route} from 'react-router-dom';
import {ConnectedTaskDetail} from './TaskDetail';

function Dashboard() {
return (
<React.Fragment>
    <NavBar />
    <div class="dash-container">
        <Widget/>
        <Route exact path='/dashboard' component={ConnectedGroupBoard}/>
        <Route path='/dashboard/task/:idInLink' component={ConnectedTaskDetail} />
        
        {/* <ConnectedGroupBoard /> */}
    </div>
    <Footer/>
</React.Fragment>
);
}

export default Dashboard;