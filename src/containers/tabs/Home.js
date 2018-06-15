import { connect } from 'react-redux';
import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import {
  Dimensions,
  View,
  StyleSheet,
  WebView,
  Text,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
        <WebView
          ref={(webview) => { this.webview = webview; }}
          style={{
            width: Dimensions.get('window').width,
            height: 6000
          }}
          source={{ uri: 'https://reactnative.cn/' }}
        />
      </View>
    );
  }
  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
