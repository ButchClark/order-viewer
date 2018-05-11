import initialState from '../actions/initialState'
import { EVENTS_LOADED } from "../actions/constants";

export function events(state = initialState, action) {
    switch (action.type) {
        case EVENTS_LOADED:
            return action.events
        default:
            return state
    }
}
