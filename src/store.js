import redux from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

// let defaultState={
//
//   All
// }

let store=createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store
