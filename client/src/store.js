import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import initialState from './actions/initialState'

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)

export default store