import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <React.Fragment>
            <div class="footer">
                <div class="footer-inner">
                    <div class="footer-inner-left">
                        <div class="footer-logo-container"> 
                            <h1>Site map</h1>
                            <a>About</a>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div class="footer-logo-container"> 
                        <h1>Powered by</h1>
                        <div class="footer-tech">  
                            <img src={require('../assets/react-logo.png')} class="footer-logo"/> 
                            <img src={require('../assets/redux.png')} class="footer-logo"/>  
                            <img src={require('../assets/node.png')} class="footer-logo"/> 
                            <img src={require('../assets/mongo.png')} class="footer-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
