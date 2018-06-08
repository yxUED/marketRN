/* @flow */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const logger = createLogger();
const devMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);
const proMiddleware = applyMiddleware(
  thunk
)(createStore);
const createStoreWithMiddleware = __DEV__ ? devMiddleware : proMiddleware;

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
