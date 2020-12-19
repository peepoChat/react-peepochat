import { CREATE_MESSAGE, MAKE_DAMAGE } from './types'

const initialState = {
  message: 'Добро пожаловать, еболыга =)',
  user: 'Creamket_',
  userColor: '#fdbd42',
  health: 100,
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        message: action.payload[0],
        user: action.payload[1],
        userColor: action.payload[2],
        health: action.payload[3],
      }
    case MAKE_DAMAGE:
      return {
        ...state,
        health: state.health - action.payload,
      }
    default:
      return state
  }
}
