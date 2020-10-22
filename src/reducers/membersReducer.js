import {
    FETCH_MEMBERS_SUCCESS,
    FETCH_ERROR,
    FETCH_MEMBERS_STARTED,
    INSERT_MEMBERS,
   
  } from "../actions/index";
  
  
  const initialState = {
  members: [],
    loading: false,
    error: null
  };
const getRecipes = function(state = initialState, action) {
    switch (action.type) {
  
      
        case FETCH_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload.error
            };
      case INSERT_MEMBERS:
        return{
          ...state,
          members : action.payload.members
        }

       
      default:
        return state;
    }
  }
  export default getRecipes;