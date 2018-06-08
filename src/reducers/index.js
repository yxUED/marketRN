/* @flow weak */
import { combineReducers } from 'redux';
import device from './device/deviceReducer';

const rootReducer = combineReducers({
  device
});

export default rootReducer;
