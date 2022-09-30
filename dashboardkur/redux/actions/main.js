import * as t from "../types";

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};

export const changeStatusForm = (status) => (dispatch) => {
  dispatch({
    type: t.CHANGESTATUS_FORM,
    payload: status,
  });
};
