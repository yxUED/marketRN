import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import FormatText from '../../components/format-text';

class Market extends Component {
  static navigationOptions = {
    title: '卖场',
  }

  constructor(props, context) {
    super(props);
    this.state = {
      paused: true,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        keyboardDismissMode={'interactive'}
      >
        <FormatText style={{ color: '#fe6946', fontSize: 15 }}>卖场</FormatText>
      </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
});
