import {PREVIEW_SHOW} from '../actions/previewShow.action'

const initialState = false;

export default function previenShowReducer(state = initialState, action: any){
    switch(action.type){
        case PREVIEW_SHOW :
            return action.payload;
        default:
            return state;
    }
}