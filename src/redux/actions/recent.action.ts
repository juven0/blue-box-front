import axios from "axios";
import { Dispatch } from "redux";
import { myFile } from "../../interfaces/myFile.interface";

export const PUSH_RECENT_FILE = 'PUSH_RECENT_FILE';

export const pushRecentFile = (file: myFile)=>{
    return async (dispatch: Dispatch) => {
        dispatch({
            type: PUSH_RECENT_FILE,
            payload: file
        })
    }
}