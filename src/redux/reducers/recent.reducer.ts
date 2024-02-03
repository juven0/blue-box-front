import { myFile } from '../../interfaces/myFile.interface';
import {PUSH_RECENT_FILE} from '../actions/recent.action';

const initialState: any = []

export default function pushRecentFile( state = initialState, action: any) {
    switch(action.type){
        case PUSH_RECENT_FILE: 
         state =  [action.payload, ...state] 
         let res  = state
         state= Object.values(res.reduce((acc: any, obj: any) => {
            acc[obj.name] = obj;
            return acc;
          }, {}));
          
        return state 
        default:
            return state;
    }
}