import {RECENT_GUIDS_RECEIVED, TOGGLE_SHOW_SEARCH} from '../actions/constants';
import initialState from '../actions/initialState'

export function display(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SHOW_SEARCH:
            console.log("> reducers.display.TOGGLE_SHOW_SEARCH")
            return {
                ...state,
                showSearch: !state.showSearch
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
