import {LOAD_PREVIEW} from '../actions/preview.action';

const initialState:any = {}

export default function loadPreview( state = initialState, action: any) {
    switch(action.type){
        case LOAD_PREVIEW:
            return action.payload
        default:
            return state;
    }
}