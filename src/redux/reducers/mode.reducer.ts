import { CHANGE_MODE } from '../actions/mode.action';

const initialState = 'home';

export default function modeReducer(state = initialState, action: any){
    switch(action.type){
        case CHANGE_MODE :
            return action.payload;
        default:
            return state;
    }
}