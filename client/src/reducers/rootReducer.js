import authReducder from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducder,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
