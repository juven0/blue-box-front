import axios from "axios";
import { Dispatch } from "redux";

export const LOAD_ALL_FILES = 'LOAD_ALL_FILES';

export const loadAllFiles = (type: string)=>{
    return async (dispatch: Dispatch) => {
        await axios({
            method: 'get',
            url: `http://localhost:4554/files/get/${type}`,
        }).then((result) => {
            dispatch({
                type: LOAD_ALL_FILES,
                payload: {
                    categorie: type,
                    files: result.data
                }
                })
        })
    }
}