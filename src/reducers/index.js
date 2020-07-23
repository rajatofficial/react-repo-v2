import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import loginReducer from "./loginReducer";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  homeReducer,
  loginReducer
});

export default rootReducer;
