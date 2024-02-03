import axios from "axios";
import { Dispatch } from "redux";

export const LOAD_EXPLORE = 'LOAD_EXPLORE';
export const SET_EXPLORE = 'SET_EXPLORE';
export const INIT_EXPLORE = 'INIT_EXPLORE'

export const loadExplore = (path: string):any =>{
    return async (dispatch: Dispatch) => {
        await   axios({
            method: 'post',
            url: 'http://localhost:4554/files/directory',
            data: {
                path: path,
            }
        }).then((result) => {
            dispatch({
                type: LOAD_EXPLORE,
                payload: result.data
                })
        })
    }
}

export const setExploreState = (name: string, path: string): any =>{
    return async (dispatch: Dispatch) =>{
        await  axios({
            method: 'post',
            url : `http://localhost:4554/files/search`,
            data:{
                path: path,
                name: name,
            }
        }).then((res:any)=> {
            console.log(res.data)
            dispatch({
                type: SET_EXPLORE,
                payload: res.data
            })
        })
    }
}

export const initExplore = (): any =>{
    return async (dispatch: Dispatch) =>{
        dispatch({
            type: INIT_EXPLORE,
            payload: [
                {
                    name: 'media',
                    type: 'directory',
                    pathe: '/media/'
                },
                {
                    name: 'home',
                    type: 'directory',
                    pathe: '/home'
                  }
            ]
        })

    }
}
