import * as t from "../types";

export const setNewNote =
  ({ priority, text, numberOfNewNote }) =>
  (dispatch) => {
    dispatch({
      type: t.SET_NEWNOTE,
      payload: { priority, text, status: "active", numberOfNewNote },
    });
  };
