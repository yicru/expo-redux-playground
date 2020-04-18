import { COUNTER_CHANGE } from '../constants/action-types'

export function changeCount(count: number) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  }
}
