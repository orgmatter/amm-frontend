import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

export const rootReducers = combineReducers({
    accountInfoState: accountReducer
})