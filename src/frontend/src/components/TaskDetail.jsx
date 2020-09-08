import React from 'react';
import './TaskDetail.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

function TaskDetail({
    id,
    task,
    groups,
    setTaskGroup,
    setTaskName,
    deleteTask
}) {
    return (
        <React.Fragment>
            <div class="taskdetail-grid">
                <div class="taskdetail-input-div">
                    <input onChange={setTaskName} value={task.name} class="taskdetail-input-field"></input>
                </div>
                <div onChange={setTaskGroup} value={task.group} class="taskdetail-select-div">
                    <select class="taskdetail-select">
                    {groups.map(
                    group=>
                    (<option key={group.id} value={group.id}>{group.name}</option>))}
                    </select>
                </div>
                <div class="taskdetail-button-div">
                    <Link to="/dashboard">
                        <button class="taskdetail-dashboard-button">Return</button>
                    </Link>
                    <button onClick={()=>{deleteTask(id)}} class="taskdetail-delete-button">Delete</button>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.idInLink;
    let task = state.tasks.find(task=>task.id===id);
    let groups = state.groups;
    return {
        id,
        task,
        groups
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.idInLink;
    return{
        setTaskCompletion(id, isComplete){
            dispatch(mutations.setTaskCompletion(id, isComplete));
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id, e.target.value));
        },
        deleteTask(taskID){
            dispatch(mutations.deleteTaskItem(taskID))
        }
    }
}

export const ConnectedTaskDetail = connect (mapStateToProps, mapDispatchToProps) (TaskDetail); 

