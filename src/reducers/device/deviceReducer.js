import { Record } from 'immutable';
import InitialState from './deviceInitialState';

const {
  SET_CODE_PUSH,
  SET_PLATFORM,
  SET_VERSION,
  IS_DEV
} = require('../../lib/constants').default;

const initialState = new InitialState();

export default function deviceReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);
  switch (action.type) {

    case SET_PLATFORM: {
      const platform = action.payload;
      return state.set('platform', platform);
    }

    case SET_VERSION: {
      const version = action.payload;
      return state.set('version', new (Record(version))());
    }

    case IS_DEV: {
      const isdev = action.payload;
      return state.set('isdev', isdev);
    }

    case SET_CODE_PUSH: {
      const metaData = action.payload;
      if (metaData) {
        return state.set('codePush', new (Record(metaData))());
      } else {
        break;
      }
    }
  }

  return state;
}
