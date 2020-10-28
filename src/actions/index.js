import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

export const FETCH_MEMBERS_SUCCESS = "FETCH_MEMBERS_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_MEMBERS_STARTED = "FETCH_MEMBERS_STARTED";
export const INSERT_MEMBERS = "INSERT_MEMBERS";
export const ERORR_INSERT = "ERROR_INSERT";
export const FETCH_SKILLS_STARTED = "FETCH_SKILLS_STARTED";
export const FETCH_SKILLS_SUCCESS = "FECTH_SKILLS_SUCCESS";
export const UPDATE_SKILLS = "UPDATE_SKILLS";
export const FETCH_HEIST_SUCCESS = "FETCH_HEIST_SUCCESS";
export const INSERT_HEISTS = "INSERT_HEIST";
export const FETCH_HEIST_STARTED = "FETCH_HEIST_STARTED";

export const insertMembers = (data) => {
  return {
    type: INSERT_MEMBERS,
    payload: {
      data,
    },
  };
};

export const insertHeists = (data) => {
  return {
    type: INSERT_HEISTS,
    payload: {
      data,
    },
  };
};

export const updateSkills = (data) => {
  return {
    type: UPDATE_SKILLS,
    payload: {
      data,
    },
  };
};

export const fetchMembersSuccess = (members) => {
  return {
    type: FETCH_MEMBERS_SUCCESS,
    payload: {
      members,
    },
  };
};

export const fetchHeistSuccess = (heist) => {
  return {
    type: FETCH_HEIST_SUCCESS,
    payload: {
      heist,
    },
  };
};

export const fetchSkillsSuccess = (skills) => {
  return {
    type: FETCH_SKILLS_SUCCESS,
    payload: {
      skills,
    },
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: {
      error,
    },
  };
};

const fetchMembersStarted = () => {
  return {
    type: FETCH_MEMBERS_STARTED,
    payload: {
      isLoading: true,
    },
  };
};
const fetchHeistStarted = () => {
  return {
    type: FETCH_HEIST_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

export const fetchMembers = () => {
  return (dispatch) => {
    dispatch(fetchMembersStarted());

    axios
      .get("http://localhost:3001/members")
      .then((res) => {
        dispatch(fetchMembersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const getHeist = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/heist")
      .then((res) => {
        dispatch(fetchHeistSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const insertHeist = (data) => {
  return (dispatch) => {
    dispatch(fetchHeistStarted());

    axios
      .post("http://localhost:3001/insertHeist", data)
      .then((res) => {
        dispatch(insertHeists(res.data));
        alert(res.data.msg);
        window.location.href = "/heist";
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const insertMember = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/insert", data)
      .then((res) => {
        dispatch(insertMembers(res.data));
        alert(res.data.msg);
        window.location.href = "/";
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const fetchSkills = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/skills/" + id + "")
      .then((res) => {
        dispatch(fetchSkillsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const fetchSkillsByID = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/skills/skill/" + id + "")
      .then((res) => {
        dispatch(fetchSkillsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const updateSkill = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/update", data)
      .then((res) => {
        dispatch(updateSkills(res.data));
        alert(res.data.msg);
        window.location.href = "/";
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};