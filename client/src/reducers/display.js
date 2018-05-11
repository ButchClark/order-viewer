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
            return {
                ...state,
                showSearch: !state.showSearch
            }

        case SHOW_ORDER_DISPLAY:
            return {
                ...state,
                showOrderDisplay: true
            }

        case HIDE_ORDER_DISPLAY:
            return {
                ...state,
                showOrderDisplay: false
            }

        case RECENT_GUIDS_RECEIVED:
            return{
                ...state,
                recentGuids: action.recentGuids
            }

        default:
            return state
    }
}
