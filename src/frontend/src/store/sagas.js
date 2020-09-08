import {take, put, select} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';
import {history} from './history';
import * as mutations from './mutations';
import {setSessionState} from './userSession';
import {saveState} from './userSession';


const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:7777";



export function* taskCreationSaga(){
    while(true){   
        const {groupID, userID} = yield take(mutations.REQUEST_TASK_CREATION);
        console.log("Got group id!", groupID);
        const ownerID = userID;
        const taskID = uuid()
        yield put(mutations.createTask(taskID, groupID, ownerID));
        const { res } = yield axios.post(url + `/task/new`, {
            task: {
                id: taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false, 
                name: "New Task"
            }
        });
    }
       
}


export function* taskModificationSaga(){
    while(true){
        const task = yield take([
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_COMPLETE
        ]);
        axios.post(url + '/task/update', {
            task: {
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        })
    }
}

export function* taskDeletionSaga(){
    while(true){
        const {taskID} = yield take (mutations.DELETE_TASK);
        console.log("The task id is" + taskID);

        const {data} = yield axios.post(url+'/task/delete', {
            task: {
                taskID
            }
        })

        console.log("The data recieved is: " + data);
        yield put (mutations.updateTasksAfterDeletion(taskID));
        history.push('/dashboard');
    }
}


export function* userAuthenticatedSaga(){
    while(true){
        const {username, password} = yield take (mutations.REQUEST_AUTHENTICATE_USER);
            try{
                const {data} = yield axios.post(url + `/authenticate`, {username, password});
                //if(!data){
                    //console.log("NO DATA COMING!!!!!!!!!!")
                    //throw new Error();
                //}
                console.log("Authenticated", data);
                yield put(mutations.setState(data.state));
                yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

                //sessionInfo = true;
                //localStorage.setItem('sessionInfo', sessionInfo);
                console.log("SECCESSSSSS!!!!!");

                //saving session details to localStorage
                setSessionState('active');
                saveState(data.state);

                history.push('/dashboard');
            } catch(e){
                console.log("cant authenticate");
                yield put (mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
            }          
    }
}

export function* userSignupSaga(){
    while(true){
        const {username, password} = yield take (mutations.REQUEST_SIGN_UP)
        try {
            console.log("Hello from saga" + username + password);
            const {data} = yield axios.post(url + `/usersignup`, {
                user: {
                    name:username,
                    password
                }
            });
            console.log("Hello from signup saga!")
            console.log("=======USER FOUND=======")
            console.log(data);
            console.log("========================")

            yield put(mutations.setState({...data.state, session:{id:data.userID}}));
            yield put (mutations.processAuthenticateUser(mutations.AUTHENTICATED));
            
            setSessionState('active');
            history.push('/dashboard');

        }
        catch{
            console.log("Error!!!!!");
        }
    }
}
