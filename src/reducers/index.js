import membersReducer from './membersReducer'
import skillsReducers from './skillsReducer'
import heistReducers from './heistReducer'
import{ combineReducers } from 'redux';

const allReducers = combineReducers({
    members : membersReducer,
    skills : skillsReducers,
    heists : heistReducers
});
export default allReducers;