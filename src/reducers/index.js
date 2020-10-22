  
import membersReducer from './membersReducer'



import{ combineReducers } from 'redux';


const allReducers = combineReducers({
    members : membersReducer
});

export default allReducers;