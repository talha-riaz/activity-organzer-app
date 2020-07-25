
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga'
import {combinedReducer} from './reducers'
import * as sagas from './sagas'


/*creating sagaMiddleWare to:
* 1. Pass sagaMiddleWare as an argument to createStore
* 2. Use sagaMiddleWare to run the saga on each of the generator function sagas defined.
*/
const sagaMiddleware = createSagaMiddleware();

/*
creating the redux store, and passing the following;
* 1. Combined reducer, derived from individual reducers
* 2. applyMiddleware to apply the middle layer for sagas.
*    applyMiddleware takes two arguments:
*    2a. createLogger() to log all the actions dispatched.
*    2b. sagaMiddleware, to apply the redux saga  
*/
export const store = createStore(
    combinedReducer, applyMiddleware(  createLogger(), sagaMiddleware  )  
                                  );
/*
Running redux sagas on each of the sagas defined./
*/
for(let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}