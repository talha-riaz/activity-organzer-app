import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'
import {setSessionState} from '../store/userSession';

function NavBar() {

let setUserSessionInactive = () => {
    setSessionState('inactive');
}

return (
<React.Fragment>
        <header class="header-div">
            <img class="logo" src={require("../assets/react.png")} alt="logo" />
            <nav class="navbar">
                <ul class="nav__links">
                    <Link to={`/dashboard`}><li>Dashboard</li></Link>
                   {/*  <li> About </li>
                    <li>Contact Dev</li> */}
                </ul>
            </nav>
            <a class="navbar-logout" href="/" onClick={setUserSessionInactive}><button>Log out</button></a>
        </header>
</React.Fragment>
);
}



export default NavBar;