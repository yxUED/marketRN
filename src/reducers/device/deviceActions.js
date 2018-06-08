const {
  SET_PLATFORM,
  SET_VERSION,
  IS_DEV
} = require('../../lib/constants').default;

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
