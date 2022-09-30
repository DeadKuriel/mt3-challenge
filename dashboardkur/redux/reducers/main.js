import * as t from "../types";

const main = (
  state = {
    name: "guest",
    formVisible: false,
  },
  action
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case t.CHANGESTATUS_FORM:
      return {
        ...state,
        formVisible: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
