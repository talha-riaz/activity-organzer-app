
import { defaultState } from '../../server/defaultState'
import { combineReducers } from 'redux'
import * as mutations from './mutations'

/*
All the individual reducers...
*/
const tasks = (tasks = defaultState.tasks, action) => {
    switch(action.type){
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
    }
    return tasks;
  }
  
  const comments = (comments = defaultState.comments, action) => {
    return comments;
  }
  
  const groups = (groups = defaultState.groups, action) => {
    return groups;
  }
  
  const users = (users = defaultState.users, action) => {
    return users;
  }

  const session = (userSession = defaultState.session || {}, action ) => {
    let  {type, authenticated, session} = action;
    switch (type){
      case mutations.REQUEST_AUTHENTICATE_USER:
        return {...userSession, authenticated: mutations.AUTHENTICATING};
      case mutations.PROCESSING_AUTHENTICATE_USER:
        return {...userSession, authenticated};
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