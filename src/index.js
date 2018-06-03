/* @flow weak */
import React from 'react';
import { View, Text, StatusBar, AppRegistry } from 'react-native';

export default function native(platform) {
  class marketRN extends React.Component {
    constructor(props, context) {
      super(props);
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar
            backgroundColor="#fe6946"
            barStyle="light-content"
          />
          <Text>RN真好啊</Text>
        </View>
      );
    }
  }
  AppRegistry.registerComponent('marketRN', () => marketRN);
}
