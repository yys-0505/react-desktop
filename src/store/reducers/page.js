import { fromJS } from 'immutable'
import * as constants from '../constants';

const defaultState = fromJS({
  showLoading: false,
  login: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return state.set("showLoading", true);
    case constants.HIDE_LOADING:
      return state.set("showLoading", false);
    case constants.CHANGE_LOGIN_STATUS:
      return state.set("login", action.value);
    default:
      return state;
  }
};

export default reducer;