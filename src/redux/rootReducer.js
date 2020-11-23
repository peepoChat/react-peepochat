import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { menuReducer } from './menuReducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
})
