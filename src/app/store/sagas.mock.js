import * as mutations from './mutations';
import uuid from 'uuid';
import { take, put } from 'redux-saga/effects';

export function* taskCreationSaga(){
    while(true){   
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        console.log("Got group id!", groupID);
        const ownerID = `U1`;
        const taskID = uuid()
        yield put(mutations.createTask(taskID, groupID, ownerID));
    }
}