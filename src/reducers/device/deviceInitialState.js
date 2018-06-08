import { Record } from 'immutable';

const Version = Record({
  version: null,
  build: null
});

const InitialState = Record({
  isMobile: false,
  isdev: false,
  platform: '',
  version: new Version()
});

export default InitialState;
