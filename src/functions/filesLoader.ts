import axios from "axios";
import { Dispatch } from "redux";

export function filesLoader(type: string, actionType: string): any{
    return async (dispatch: Dispatch) => {
        await axios({
            method: 'get',
            url: `http://localhost:4554/files/${type}`,
        }).then((result) => {
            dispatch({
                type: actionType,
                payload: result.data
                })
        })
    }
}