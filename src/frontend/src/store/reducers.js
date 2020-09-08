
import { defaultState } from './defaultState'
import { combineReducers } from 'redux'
import * as mutations from './mutations'

/*
All the individual reducers...
*/
const tasks = (tasks = [], action) => {
    switch(action.type){
      case mutations.SET_STATE:
        return action.state.tasks;
      case mutations.CREATE_TASK:
        return [...tasks, {
            name: 'New Task',
            id: action.taskID,        
            group: action.groupID,
            owner: action.ownerID,
            isComplete: false
        }]
      case mutations.SET_TASK_COMPLETE:
          return tasks.map(
              task=> {
                  return (task.id === action.taskID) ?
                  {...task, isComplete: action.isComplete} :
                  task;
              }
          )
      case mutations.SET_TASK_NAME:
        return tasks.map(
          task=>(
            (task.id === action.taskID) ?
          {...task, name: action.name} :
            task
          )
        )
      case mutations.SET_TASK_GROUP:
        return tasks.map(
          task => (
            (task.id === action.taskID) ?
            {...task, group: action.groupID} :
            task
            )
        )
       case mutations.UPDATE_TASKS_AFTER_DELETION:
        console.log("Hello from reducer man");
        return tasks.filter(
          task => {
            return ((task.id !== action.taskID))
          } 
        )
    }
    return tasks;
  }
  
  const comments = (comments = [], action) => {
    return comments;
  }
  
  const groups = (groups = [], action) => {
    switch (action.type) {
      case mutations.SET_STATE:
        return action.state.groups;
    }
    return groups;
  }
  
  const users = (users = [], action) => {
    return users;
  }

  const session = (userSession = defaultState.session || {}, action ) => {
    let  {type, authenticated, session, registered} = action;
    switch (type){
      case mutations.SET_STATE:
        return {...userSession, id: action.state.session.id}
      case mutations.REQUEST_AUTHENTICATE_USER:
        return {...userSession, authenticated: mutations.AUTHENTICATING};
      case mutations.PROCESSING_AUTHENTICATE_USER:
        return {...userSession, authenticated};
      case mutations.SET_REGISTRATION_STATUS:
        return {...userSession, registered}
      default:
        return userSession;
    }
  }
  
  /*
  Combining the reducers and exporting the combined reducer...
  */
  export const combinedReducer = combineReducers(
      { 
        tasks,
        comments,
        groups,
        users,
        session
      }
    );