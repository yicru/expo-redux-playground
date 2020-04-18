import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/countReducer'
import countsReducer from '../modules/countsSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
