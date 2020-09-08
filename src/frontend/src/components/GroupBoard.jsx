import React from 'react'
import {connect} from 'react-redux';
import './GroupBoard.css'
import {ConnectedTaskBoard} from './TaskBoard'

function GroupBoard({groups}) {
    return (
        <React.Fragment>
            <div class="group-flex-grid">
                {groups.map(group => (
                <ConnectedTaskBoard key={group.id} title={group.name} id={group.id}/>
                ))}
            </div>
        </React.Fragment>
        )
    }

const mapStateToProps = (state, ownProps) => {
return {
        groups: state.groups
        }
}

export const ConnectedGroupBoard = connect (mapStateToProps) (GroupBoard);
