import React from 'react'
import {connect} from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { Link } from 'react-router-dom';
import './TaskBoard.css'

//CSS-in-JS for title background color
let taskBoardColor = (titleName) => {
    if(titleName==='To Do'){
        return(
            {
            backgroundColor: "#e66868"
            }
            )
    }
    else if (titleName==='Doing') {
        return(
            {
            backgroundColor: "#e6ba68"
            }
            )
    }
    else {
        return(
            {
            backgroundColor: "#55c063"
            }
            )
    }
}
function TaskBoard({title, id, tasks, userID, createNewTask}) {

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    if(isEmpty(tasks)){
        return (
        <React.Fragment>
            <div class="group-col">
                    <div class="group-title-container" align="left" style={taskBoardColor(title)}> {title}</div>
                    <div class="group-task-lisk">
                        <div class="group-task-elements-none">{"No tasks"}</div>
                    </div>
                    <div class="group-button">
                        <a class="group-add-task" ><button class="add-button" onClick={() => createNewTask(id, userID)} >+ Add task</button></a>
                    </div>
            </div>
        </React.Fragment>
        );
    }
        return (
            <React.Fragment>
                <div class="group-col">
                        <div class="group-title-container" align="left" style={taskBoardColor(title)}> {title}</div>
                        <div class="group-task-lisk">
                            {
                                tasks.map(task => 
                                {
                                    return (
                                        <Link to={`/dashboard/task/${task.id}`} key={task.id}>
                                            <div class="group-task-elements">{task.name}</div>
                                        </Link>
                                    );
                                }
                            )}
                            {/* <div class="group-task-elements">Refactor tests</div>
                            <div class="group-task-elements">Document controller</div> */}
                        </div>
                        <div class="group-button">
                            <a class="group-add-task" ><button class="add-button" onClick={() => createNewTask(id, userID)} >+ Add task</button></a>
                        </div>
                </div>
            </React.Fragment>
        )
}

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
      title: ownProps.title,
      id: groupId,
      tasks: state.tasks.filter(task => task.group === groupId),
      userID: state.session.id
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask: (id, userID) => {
            console.log("Creating new task with iD: " + id + "and userID: "+ userID);
            dispatch(requestTaskCreation(id, userID));
        }
    }
}

export default TaskBoard;

export const ConnectedTaskBoard = connect (mapStateToProps, mapDispatchToProps) (TaskBoard);