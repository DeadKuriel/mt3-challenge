import { combineReducers } from "redux";
import main from "./main";
import notesState from "./notesReducer";

const rootReducer = combineReducers({
  main: main,
  notesState: notesState,
});

export default rootReducer;
