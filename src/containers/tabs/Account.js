import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormatText from '../../components/format-text';

class Account extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }} >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
          automaticallyAdjustContentInsets={false}
        >
          <FormatText style={{ color: '#fe6946', fontSize: 15 }}>我的</FormatText>
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal:20
  },
  avatarHeader: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc'
  },
  header: {
    backgroundColor: '#fe6946'
  },
  arrow: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
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
