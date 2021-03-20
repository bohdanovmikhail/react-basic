import { combineReducers } from 'redux';
import { counterReducer } from './counter/reducer';
import { inputDataReducer } from './inputData/reducer';
import { usersReducer } from './users/reducer';

export const rootReducer = combineReducers({
    inputData: inputDataReducer,
    counter: counterReducer,
    users: usersReducer,
});
