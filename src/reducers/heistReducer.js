import {
    FETCH_HEIST_SUCCESS,
    FETCH_ERROR,
    INSERT_HEISTS,
    FETCH_HEIST_STARTED,
  } from "../actions/index";
  
  const initialState = {
    heist: [],
    loading: false,
    error: null,
  };
  const heistReducers = function (state = initialState, action) {
    switch (action.type) {
      case FETCH_HEIST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          heist: action.payload.heist,
        };
  
      case FETCH_HEIST_STARTED:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      case INSERT_HEISTS:
        return {
          ...state,
          heist: action.payload.heist,
        };
  
      default:
        return state;
    }
  };
  export default heistReducers;
  