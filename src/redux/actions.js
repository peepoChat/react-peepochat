import { CHANGE_THEME, CHANGE_TAB } from './types'

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
