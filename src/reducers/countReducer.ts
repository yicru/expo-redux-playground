import { COUNTER_CHANGE } from '../constants/action-types'
import { ActionType } from '../types/action'

const initialState = {
  count: 0,
}

const countReducer = (
  state: typeof initialState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}

export default countReducer
