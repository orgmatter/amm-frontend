import { 
    FETCH_ACCOUNT_START, 
    FETCH_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_FAILED,
    FETCH_ACCOUNT_STOP
} from "../actions/types";
import { accountState as initialState } from "../states";

export default function accountReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_ACCOUNT_START:
            return {
                ...state,
                status: "fetch_start"
            }
        case FETCH_ACCOUNT_SUCCESS:
            return {
                ...state,
                status: "fetch_success",
                data: action.payload
            }
        case FETCH_ACCOUNT_FAILED:
            return {
                ...state,
                status: "fetch_failed"
            }
        case FETCH_ACCOUNT_STOP:
            return {
                ...state,
                status: "fetch_stop"
            }
        default:
            return {
                ...state
            }
    }
}