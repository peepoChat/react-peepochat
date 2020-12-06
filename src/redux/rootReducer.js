import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { menuReducer } from './menuReducer'
import { messageReducer } from './messageReducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  message: messageReducer,
})
