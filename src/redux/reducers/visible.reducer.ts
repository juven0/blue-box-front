import {LOAD_VISIBLE} from '../actions/visible.action';

const initialState = {}

export default function loadVisible( state = initialState, action: any) {
    switch(action.type){
        case LOAD_VISIBLE:
            return action.payload
        default:
            return state;
    }
}