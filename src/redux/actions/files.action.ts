import axios, { AxiosResponse } from "axios";

export const GET_FILES: string = 'GET_FILES';

export const getFiles=  (url: string): any => {
    return async (dispatch: any)=>{ await axios({
        method: 'post',
        url: 'http://localhost:4554/files/directory',
        data: {
            path: url,
        }
    }).then((res)=>{
        dispatch({type: GET_FILES, payload: res.data})
    })
}
}