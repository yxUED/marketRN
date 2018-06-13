import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  WebView,
  View,
  FlatList,
  Text,
} from 'react-native';
import FormatText from '../../components/format-text';

var DEFAULT_URL = "http://192.168.155.26/#/auction/longtimeAuctionList";
var Screen = Dimensions.get('window');
class Market extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      paused: true,
      url: DEFAULT_URL
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewWrap: {
    width: Screen.width,
    height: Screen.height
  }
});
