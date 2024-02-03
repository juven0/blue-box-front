import { GET_FILES } from "../actions/files.action";

const initialState = {}

export default function filesReducer(state = initialState, action: any){
    switch(action.type){
        case GET_FILES:
            return action.payload;
        default :
            return state;
    }
}