import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import trackingReducer from "./reducers/index";

export default createStore(
	combineReducers({
		trackingReducer,
		form: formReducer
	}),
	applyMiddleware(thunk)
);
