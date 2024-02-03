import { Dispatch } from "redux";
import { myFile } from "../../interfaces/myFile.interface";

export const LOAD_PREVIEW = 'LOAD_PREVIEW';

export const loadPreview = (data: myFile)=>{
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOAD_PREVIEW,
            payload: data
        })
    }
} 