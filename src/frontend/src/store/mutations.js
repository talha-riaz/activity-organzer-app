export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`; 
export const DELETE_TASK = `DELETE_TASK`; 
export const REQUEST_AUTHENTICATE_USER=`REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const REQUEST_SIGN_UP = `REQUEST_SIGN_UP`;
export const SET_REGISTRATION_STATUS = `SET_REGISTRATION_STATUS`;
export const UPDATE_TASKS_AFTER_DELETION = `UPDATE_TASKS_AFTER_DELETION`;


export const requestTaskCreation = (groupID, userID) => {
    return {
    type: REQUEST_TASK_CREATION,
    groupID,
    userID
    };
} 

export const createTask = (taskID, groupID, ownerID) => {
    return {
        type: CREATE_TASK,
        taskID,
        groupID,
        ownerID
    }
}

export const setTaskCompletion = (id, isComplete) => {
    return {
        type: SET_TASK_COMPLETE,
        taskID: id,
        isComplete
    }
}

export const setTaskName = (id, name) => {
    return {
        type: SET_TASK_NAME,
        taskID: id, 
        name
    }
}

export const setTaskGroup = (id, groupID) => {
    return {
        type: SET_TASK_GROUP,
        taskID: id,
        groupID
    }
}

export const deleteTaskItem = (taskID) => {
    return {
        type: DELETE_TASK,
        taskID
    }
}

export const updateTasksAfterDeletion = (taskID) => {
    return {
        type: UPDATE_TASKS_AFTER_DELETION,
        taskID
    }
}


export const requestAuthenticateUser = (username, password) => {
    return (
        {
            type: REQUEST_AUTHENTICATE_USER,
            username, 
            password
        }
    )
}

export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
})

export const setState = (state = {}) => ({
    type: SET_STATE,
    state
})

export const requestSignUp = (username, password) => {
    return (
        {
            type: REQUEST_SIGN_UP,
            username,
            password
        }
    )
}

export const setRegistrationStatus = (registered) => {
    return (
        {
            type: SET_REGISTRATION_STATUS,
            registered
        }
    )
}
