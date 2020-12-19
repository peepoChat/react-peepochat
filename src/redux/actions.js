import { CHANGE_THEME, CHANGE_TAB, CREATE_MESSAGE, MAKE_DAMAGE } from './types'

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

export function createMessage(newMessage, newUser, newUserColor, newHealth) {
  return {
    type: CREATE_MESSAGE,
    payload: [newMessage, newUser, newUserColor, newHealth],
  }
}

export function makeDamage(damage) {
  return {
    type: MAKE_DAMAGE,
    payload: damage,
  }
}
