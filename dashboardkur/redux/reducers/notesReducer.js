import * as t from "../types";

const notesState = (state = {}, action) => {
  // console.log("reducter", action);
  switch (action.type) {
    case t.SET_NEWNOTE:
      console.log("setnewnotte", action.payload);
      console.log("payload", action.payload.numberOfNewNote);
      return {
        ...state,
        [action.payload.numberOfNewNote]: {
          ...action.payload,
        },
      };
    default:
      return { ...state };
  }
};

export default notesState;
