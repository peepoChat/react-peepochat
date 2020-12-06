import { CHANGE_THEME, CHANGE_TAB, CREATE_MESSAGE } from './types'

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  }
}

export function changeTab(newTab) {
  return {
    type: CHANGE_TAB,
    payload: newTab,
  }
}

export function createMessage(newMessage, newUser, newUserColor) {
  return {
    type: CREATE_MESSAGE,
    payload: [newMessage, newUser, newUserColor],
  }
}
