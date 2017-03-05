import {combineReducers, createStore } from 'redux'
import nameReducer from './../reducers/nameReducer'
import userReducer from './../reducers/userReducer'

const rootReducer = combineReducers({
    nameReducer,
    userReducer,
});
const store = createStore(rootReducer);



store.subscribe(() => {
  console.log("store changed ",store.getState());
});

export default store;
