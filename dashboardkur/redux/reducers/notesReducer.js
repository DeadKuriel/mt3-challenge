import * as t from "../types";

const notesState = (state = {}, action) => {
  switch (action.type) {
    case t.SET_NEWNOTE:
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
