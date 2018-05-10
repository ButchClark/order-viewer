import {TOGGLE_SHOW_SEARCH} from '../actions/constants';
import initialState from '../actions/initialState'

function display(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SHOW_SEARCH:
            console.log("> reducers.display.TOGGLE_SHOW_SEARCH")
            return {
                ...state,
                showSearch: !state.showSearch
            }

        default:
            return state
    }
}

export default display