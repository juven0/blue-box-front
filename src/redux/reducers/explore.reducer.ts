import {INIT_EXPLORE, LOAD_EXPLORE, SET_EXPLORE} from '../actions/explore.action';

const initialState = {}

export default function loadExplore( state = initialState, action: any) {
    switch(action.type){
        case LOAD_EXPLORE:
            return action.payload
        case SET_EXPLORE:
            return action.payload
        case INIT_EXPLORE:
            return action.payload
        default:
            return state;
    }
}