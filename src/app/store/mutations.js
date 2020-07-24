export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`; 


export const requestTaskCreation = (groupID) => {
    return {
    type: REQUEST_TASK_CREATION,
    groupID
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