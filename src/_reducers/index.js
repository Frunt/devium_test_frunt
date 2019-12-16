import {usersReducer} from "./users.reducers";
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    usersReducer,
});

export default rootReducer;
