import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';

class AssessList extends Component {
  constructor(props, context) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
      return {
          title: params.title,
      }
  };

  render() {

    return (
      <View style={{ flex: 1 }} >
        <Text>
          我是新页面
        </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AssessList);

const styles = StyleSheet.create({

});
