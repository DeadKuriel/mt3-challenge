import * as t from "../types";

export const setNewNote =
  ({ priority, text, numberOfNewNote }) =>
  (dispatch) => {
    console.log("datos", numberOfNewNote);
    dispatch({
      type: t.SET_NEWNOTE,
      payload: { priority, text, status: "active", numberOfNewNote },
    });
  };
