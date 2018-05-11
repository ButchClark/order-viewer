import {
    RECENT_GUIDS_RECEIVED,
    SHOW_ORDER_DISPLAY,
    HIDE_ORDER_DISPLAY,
    TOGGLE_SHOW_SEARCH
} from '../actions/constants';
import initialState from '../actions/initialState'

export function display(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SHOW_SEARCH:
            console.log("> reducers.display.TOGGLE_SHOW_SEARCH")
            return {
                ...state,
                showSearch: !state.showSearch
            }

        case SHOW_ORDER_DISPLAY:
            console.log("> reducers.display.SHOW_ORDER_DISPLAY")
            console.dir(state)
            return {
                ...state,
                showOrderDisplay: true
            }

        case HIDE_ORDER_DISPLAY:
            console.log("> reducers.display.HIDE_ORDER_DISPLAY")
            return {
                ...state,
                showOrderDisplay: false
            }

        case RECENT_GUIDS_RECEIVED:
            console.log("> reducers.display.RECENT_GUIDS_RECEIVED")
            return{
                ...state,
                recentGuids: action.recentGuids
            }

        default:
            return state
    }
}
