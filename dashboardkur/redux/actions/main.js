import * as t from "../types";

export const setInfo = (name) => (dispatch) => {
  console.log("setinfo", name);
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};
