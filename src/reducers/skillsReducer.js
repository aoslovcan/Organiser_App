import {
  FETCH_SKILLS_SUCCESS,
  FETCH_ERROR,
  UPDATE_SKILLS,
} from "../actions/index";

const initialState = {
  skills: [],
  loading: false,
  error: null,
};
const skillsReducers = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        skills: action.payload.skills,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case UPDATE_SKILLS:
      return {
        ...state,
        skills: action.payload.skills,
      };

    default:
      return state;
  }
};
export default skillsReducers;