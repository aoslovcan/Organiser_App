import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_MEMBERS_STARTED = 'FETCH_MEMBERS_STARTED';
export const INSERT_MEMBERS = 'INSERT_MEMBERS';
export const ERORR_INSERT = 'ERROR_INSERT';



export const insertMembers= data =>{
  return {
    type: INSERT_MEMBERS,
    payload :{
      data
    }
  }
}



export const fetchMembersSuccess = members =>  {
    
   
    return {
        type: FETCH_MEMBERS_SUCCESS,
        payload: {
         members
        }
      };

}

const fetchError = error => {
    return {
      type: FETCH_ERROR,
      payload: {
        error
      }
    };
  };

  const fetchMembersStarted = () => {
    return {
      type: FETCH_MEMBERS_STARTED,
      payload: {
        isLoading: true
      }
    };
  };

  export const fetchMembers = () => {
    return dispatch => {
      dispatch(fetchMembersStarted());
  
      axios
        .get("http://localhost:3001/members")
        .then(res => {
          dispatch(fetchMembersSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message));
        });
    };
  };

  export const insertMember = (data) =>{
    return dispatch => {
     
  
      axios
        .post("http://localhost:3001/insert", data )
        .then(res => {
          dispatch(insertMembers(res.data));
         alert(res.data.msg);
         window.location.href= "/";

        })
        .catch(err => {
          dispatch(fetchError(err.message));
        });
    };
  }

 
  