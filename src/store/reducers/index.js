import { combineReducers } from 'redux-immutable'
import pageReducer from './page'

const reducer = combineReducers({
  page: pageReducer
});

export default reducer;