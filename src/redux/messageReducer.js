import { CREATE_MESSAGE, MAKE_DAMAGE } from './types'

const initialState = {
  message: 'Добро пожаловать, еболыга =)',
  user: 'Creamket_',
  userColor: '#fdbd42',
  currentHealth: 100,
  maxHealth: 100,
  lastDamage: 0,
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        message: action.payload[0],
        user: action.payload[1],
        userColor: action.payload[2],
        currentHealth: action.payload[3],
        maxHealth: action.payload[3],
        lastDamage: 0,
      }
    case MAKE_DAMAGE:
      return {
        ...state,
        currentHealth: state.currentHealth - action.payload,
        lastDamage: action.payload,
      }
    default:
      return state
  }
}
