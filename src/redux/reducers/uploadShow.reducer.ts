import {UPLOAD_SHOW} from '../actions/uploadShow'

const initialState = false;

export default function uploadShowReducer(state = initialState, action: any){
    switch(action.type){
        case UPLOAD_SHOW :
            return action.payload;
        default:
            return state;
    }
}