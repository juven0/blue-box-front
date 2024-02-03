import axios from "axios";
import { Dispatch } from "redux";

export const LOAD_VISIBLE = 'LOAD_VISIBLE';

export const loadVisible = (data: any)=>{
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOAD_VISIBLE,
            payload: data
        })
    }
}