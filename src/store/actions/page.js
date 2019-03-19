import * as constants from '../constants'

export const showLoadingAction = () => ({
  type: constants.SHOW_LOADING
});

export const hideLoadingAction = () => ({
  type: constants.HIDE_LOADING
});

export const changeLoginStatus = (value) => ({
  type: constants.CHANGE_LOGIN_STATUS,
  value
});