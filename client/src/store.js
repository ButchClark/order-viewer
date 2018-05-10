import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import initialState from './actions/initialState'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
)

export default store