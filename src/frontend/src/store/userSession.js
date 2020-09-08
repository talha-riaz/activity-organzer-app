import { defaultState } from './defaultState'

export const setSessionState = (value) => {
    localStorage.setItem('sessionState', value)
}

export const setSessionGroups = (groups) => {
    localStorage.setItem('sessionGroups', groups)
} 

export const getSessionState = () => {
    let value = localStorage.getItem('sessionState')
    return value;
}

export const getSessionGroups = () => (localStorage.getItem('sessionGroups'))

export const clearState = () => (localStorage.clear);

export const saveState = (state) => {
    localStorage.setItem('appState', state)
}

export const getState = () => {
    let state = localStorage.getItem('appState');
    return state;

}


