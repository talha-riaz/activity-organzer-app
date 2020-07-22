import React from 'react';
import {connect} from 'react-redux';
import { requestTaskCreation } from '../store/mutations'

const TaskList = ({tasks, name, id, createNewTask}) => {
    return(
        <div>
            <div>
                <h1>{name}</h1>
                {tasks.map(task => (<div key={task.id}>{task.name}</div>))}
            </div>
            <button onClick={() => createNewTask(id)}>Add New</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask: (id) => {
            console.log("Creating new task with iD: ", id);
            dispatch(requestTaskCreation(id));
        }
    }
}

export const ConnectedTaskList = connect (mapStateToProps, mapDispatchToProps) (TaskList);