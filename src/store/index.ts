import { combineReducers } from 'redux'
import countReducer from '../reducers/countReducer'
import countsReducer from '../modules/countsSlice'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export default store
