import './constants'
import {
    TOGGLE_SHOW_SEARCH,
    SHOW_ORDER_DISPLAY,
    HIDE_ORDER_DISPLAY,
    RECENT_GUIDS_RECEIVED,
    EVENTS_LOADED
} from "./constants";

export function toggleShowSearch(){
    return async(dispatch) =>{
        dispatch({
            type: TOGGLE_SHOW_SEARCH
        })
    }
}

export function showOrderDisplay(){
    return async(dispatch) =>{
        dispatch({
            type: SHOW_ORDER_DISPLAY
        })
    }
}

export function hideOrderDisplay(){
    return async(dispatch) =>{
        dispatch({
            type: HIDE_ORDER_DISPLAY
        })
    }
}

export function getRecentClientOrderGuids(){
    return async(dispatch) =>{
        // const resp = await fetch('/events/guids')
        // const json = await resp.json()
        dispatch({
            type: RECENT_GUIDS_RECEIVED,
            recentGuids: ["click me"]
        })
    }
}

export function loadEvents(guid){
    if(!guid){
        console.log('>actions.loadEvents called with undefined/null')
        return
    }

    console.log(`>actions.loadEvents for clientOrderGuid: ${guid}`)
    return async(dispatch) => {
        const uri = `/events?clientOrderGuid=${guid}`
        const resp = await fetch(uri)
        await console.log(`after fetch(${uri})`)
        const json = await resp.json()
        await console.log(` .. got back json: ${json}`)
        await console.dir(json)
        dispatch({type: TOGGLE_SHOW_SEARCH})
        dispatch({type: SHOW_ORDER_DISPLAY})
        dispatch({
            type: EVENTS_LOADED,
            events: json
        })
    }
}