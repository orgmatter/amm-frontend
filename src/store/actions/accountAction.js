import { 
    FETCH_ACCOUNT_START,
    FETCH_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_FAILED,
    FETCH_ACCOUNT_STOP
} from "./types";

export const accountAction = (address) => dispatch => {

    dispatch({
        type: FETCH_ACCOUNT_START
    })

    fetch(`http://localhost:3001/account/${address}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(res => {
        const { accountInfo } = res;
        dispatch({
            type: FETCH_ACCOUNT_SUCCESS,
            payload: accountInfo
        })
    })
    .catch(e => {
        dispatch({
            type: FETCH_ACCOUNT_FAILED
        })
        console.log("fetch_error_message: ", e)
    })
}