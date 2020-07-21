import React from 'react';
import {connect} from 'react-redux';

const TaskList = ({tasks, name}) => {
    return(
        <div>
            <h1>{name}</h1>
            {tasks.map(task => (<div>{task.name}</div>))}
        
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
      name: ownProps.name,
      id: groupId,
      tasks: state.tasks.filter(task => task.group === groupId)
    }
  }

export const ConnectedTaskList = connect (mapStateToProps) (TaskList);