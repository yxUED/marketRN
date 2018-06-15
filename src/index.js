/* @flow weak */
import React from 'react';
import { View, YellowBox, StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import CodePush from 'react-native-code-push';
import App from './containers/App';
import configureStore from './lib/configureStore';
import { setPlatform, isDev, setVersion, setCodePush } from './reducers/device/deviceActions';
import deviceInitialState from './reducers/device/deviceInitialState';

const DEV = __DEV__;

export default function native(platform) {
  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

  if (DEV) { installDevTools(Immutable); }
  const codePushOptions = {
    // // https://github.com/Microsoft/react-native-code-push.
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  };

  class MarketRN extends React.Component {
    constructor(props, context) {
      super(props);
      this.store = configureStore({
        device: (new deviceInitialState()).set('isMobile',true)
      });
    }
    componentDidMount() {
      // CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING)
      //   .then((metaData) => {
      //     console.log("更新了---"+metaData);
      //     this.store.dispatch(setCodePush(metaData));
      //   });
    }

    render() {
      const VERSION = '0.0.6';
      const BUILD = 4;
      this.store.dispatch(setPlatform(platform));
      this.store.dispatch(setVersion({ VERSION, BUILD }));
      this.store.dispatch(isDev(DEV));

      return (
        <Provider store={this.store}>
          <View style={{ flex: 1 }}>
            <StatusBar
              backgroundColor="#2784E2"
              barStyle="light-content"
            />
            <App />
          </View>
        </Provider>
      );
    }
  }
  AppRegistry.registerComponent('marketRN', () => (DEV ? MarketRN : CodePush(codePushOptions)(MarketRN)));
}
