import {LOAD_ALL_FILES} from '../actions/allFiles.action'

const initialState: any = []
export default function loadAllFiles( state = initialState, action: any) {
    switch(action.type){
        case LOAD_ALL_FILES:
            return [...state, action.payload]
        default:
            return state;
    }
}