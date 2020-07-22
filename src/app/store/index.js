
import {createStore, applyMiddleware} from 'redux';
import {defaultState} from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock'

const reducer = (state = defaultState, action) => {
  console.log('Hello from reducer', action.type);
  return state;
}

export const store = createStore(
    reducer, applyMiddleware(  createLogger(), sagaMiddleware  )  
                                  );
/*
DONT FORGET TO ADD IN A FOR LOOP TO CAPTURE ALL THE SAGAS
*/

sagaMiddleware.run(sagas.taskCreationSaga);