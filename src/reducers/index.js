import { combineReducers } from 'redux';
import { RECEIVEMEMES } from '../actions';

function memes(state = [], action) {
  switch (action.type) {
    case RECEIVEMEMES:
      return action.memes;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes });

export default rootReducer;
