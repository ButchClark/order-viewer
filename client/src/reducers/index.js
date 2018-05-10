import {combineReducers} from 'redux'
import display from './display'
import order from './order'
import events from './events'

export default combineReducers(
    order,
    events,
    display
)
