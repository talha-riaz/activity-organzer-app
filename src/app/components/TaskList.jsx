import React from 'react';
import {connect} from 'react-redux';
import { requestTaskCreation } from '../store/mutations'
import { Link } from 'react-router-dom'

const TaskList = ({tasks, name, id, createNewTask}) => {
    return(
        <div className="card p-2 m-2">
            <div>
                <h1>{name}</h1>
                {tasks.map(task => 
                {
                    return (
                    <Link to={`/task/${task.id}`} key={task.id}>
                        <div className="card p-2 mt-2"
                            >{task.name}</div>
                    </Link>
                    )
                }   
               )}
            </div>
            <button onClick={() => createNewTask(id)} className="btn btn-primary btn-block mt-2">Add New</button>
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