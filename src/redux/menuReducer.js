import { CHANGE_TAB } from './types'

const initialState = {
  value: 'settings',
}

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
