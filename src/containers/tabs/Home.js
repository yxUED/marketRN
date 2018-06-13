import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  WebView,
  Text,
} from 'react-native';

class Home extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>你好杀戮空间</Text>
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
