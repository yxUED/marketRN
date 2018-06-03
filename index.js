import { Platform } from 'react-native';
import rnTcp from './src';

const platform = Platform.select({
  ios: 'ios',
  android: 'android',
});

rnTcp(platform);
