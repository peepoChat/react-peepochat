import { CREATE_MESSAGE } from './types'

const initialState = {
  message: 'Добро пожаловать, еболыга =)',
  user: 'Creamket_',
  userColor: '#fdbd42',
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, message: action.payload[0], user: action.payload[1], userColor: action.payload[2] }
    default:
      return state
  }
}
