import React from 'react';
import {connect} from 'react-redux';
import {ConnectedTaskList} from './TaskList';

const Dashboard = ({groups}) => {
  return(
  <div className="row">
    {groups.map(group => (
      <ConnectedTaskList key={group.id} name={group.name} id={group.id} className="col"/>
    ))}
  </div>  
);
    }
const mapStateToProps = (state, ownProps) => {
  return {
    groups: state.groups
  }
}

export const ConnectedDashboard = connect (mapStateToProps) (Dashboard);