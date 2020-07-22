export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;


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