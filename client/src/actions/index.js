import './constants'
import {TOGGLE_SHOW_SEARCH, RECENT_GUIDS_RECEIVED} from "./constants";

export function toggleShowSearch(){
    return async(dispatch) =>{
        dispatch({
            type: TOGGLE_SHOW_SEARCH
        })
    }
}

export function getRecentClientOrderGuids(){
    return async(dispatch) =>{
        // fetch guids
        const resp = await fetch('/events/guids')
        await console.log('after fetch(/events/guids')
        const json = await resp.json()
        // This becomes the "action" object in the reducer
        await console.log(`Got back messages: ${JSON.stringify(json.guids)}`)
        await console.dir(json)
        dispatch({
            type: RECENT_GUIDS_RECEIVED,
            recentGuids: json.guids
        })
    }
}