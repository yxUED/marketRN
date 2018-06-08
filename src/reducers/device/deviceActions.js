const {
  SET_CODE_PUSH,
  SET_PLATFORM,
  SET_VERSION,
  IS_DEV
} = require('../../lib/constants').default;

export function setCodePush(metaData) {
  return {
    type: SET_CODE_PUSH,
    payload: metaData
  };
}

export function setPlatform(platform) {
  return {
    type: SET_PLATFORM,
    payload: platform
  };
}

export function setVersion(version) {
  return {
    type: SET_VERSION,
    payload: version
  };
}

export function isDev(dev) {
  return {
    type: IS_DEV,
    payload: dev
  };
}
