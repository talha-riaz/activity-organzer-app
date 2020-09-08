import React from 'react'
import './Widget.css'
import {connect} from 'react-redux'
import Clock from './WidgetClock';
import { getSessionState } from '../store/userSession'

function Widget({nickname, id}) {
    console.log("THIS IS THE WIDGET: " + nickname);

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    let session = getSessionState();



    return (
        <React.Fragment>
            <div class="widget-container">
                <div class="widget-left">
                    <div class="widget-nickname">
                        {nickname}
                    </div>
                    <div class="widget-login">
                        {"Logged in at: " + dateTime}
                    </div>
                    <div class='widget-session-id'>
                        {"Session ID: " + id}
                    </div>
                    <div class="widget-session-state">
                        {"Session state: " + session}
                    </div>
                </div>
                <div class="widget-right">
                    <Clock />
                </div>                
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    //let nickname = state.session.nickname;
    return (
        {
            nickname: state.session.nickname,
            id: state.session.id
        }
    );
}

export const ConnectedWidget = connect (mapStateToProps) (Widget)