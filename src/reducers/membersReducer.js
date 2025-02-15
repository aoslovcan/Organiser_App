import {
  FETCH_MEMBERS_SUCCESS,
  FETCH_ERROR,
  FETCH_MEMBERS_STARTED,
  INSERT_MEMBERS,
} from "../actions/index";

const initialState = {
  members: [],
  loading: false,
  error: null,
};
const membersReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        members: action.payload.members,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case INSERT_MEMBERS:
      return {
        ...state,
        members: action.payload.members,
      };

    default:
      return state;
  }
};
export default membersReducer;