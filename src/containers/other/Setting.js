import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormatText from '../../components/format-text';

class Account extends Component {
  constructor(props, context) {
    super(props);
  }
  static navigationOptions = () => ({title: "设置"});

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }} >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
          automaticallyAdjustContentInsets={false}
        >
          <FormatText style={{ color: '#fe6946', fontSize: 15 }}>设置</FormatText>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
  scrollView: Platform.select({
    ios: {
      backgroundColor: '#f5f5f5'
    },
    android: {}
  }),
  scrollViewContainer: Platform.select({
    ios: {
      flex: 1,
      backgroundColor: '#f5f5f5'
    },
    android: {}
  })
});
