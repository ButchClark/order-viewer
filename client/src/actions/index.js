import './constants'
import {TOGGLE_SHOW_SEARCH} from "./constants";

export function toggleShowSearch(){
    return async(dispatch) =>{
        dispatch({
            type: TOGGLE_SHOW_SEARCH
        })
    }
}