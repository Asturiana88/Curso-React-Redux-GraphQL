import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import userReducer, {restoreSessionAction} from './userDuck'
import thunk from 'redux-thunk'
import charsReducer, {getCharactersAction, retrieveFavs} from './charsDuck'


let rootReducer = combineReducers({
    user:userReducer,
    characters:charsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genetateStore() {
    let store = createStore(
        rootReducer, composeEnhancers(applyMiddleware(thunk))
    )
    getCharactersAction()(store.dispatch, store.getState)
    restoreSessionAction()(store.dispatch)
    retrieveFavs()(store.dispatch, store.getState)
    return store
}

