import React from 'react';
import './NavBar.css'
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
                    <li><a href="/dashboard"> Dashboard </a></li>
                    <li><a href="/dashboard"> About </a></li>
                    <li><a href="/dashboard"> Contact Dev </a></li>
                </ul>
            </nav>
            <a class="navbar-logout" href="/" onClick={setUserSessionInactive}><button>Log out</button></a>
        </header>
</React.Fragment>
);
}



export default NavBar;