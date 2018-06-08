import { Record } from 'immutable';

const Version = Record({
  version: null,
  build: null
});

const CodePush = Record({
  label: null,
  appVersion: null,
  description: null,
  packageHash: null,
  packageSize: null,
  isFirstRun: null,
  isMandatory: null,
  isPending: null,
  failedInstall: null
});

const InitialState = Record({
  isMobile: false,
  isdev: false,
  platform: '',
  version: new Version(),
  codePush: new CodePush()
});

export default InitialState;
