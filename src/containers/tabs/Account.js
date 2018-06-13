import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Platform,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonForm from '../../components/common-form';

class Account extends Component {
  constructor(props, context) {
    super(props);
  }

  goPage(page) {
    this.props.navigation.navigate(page)
  }

  render() {
    const myFormCfg = {
      fields: {
        feedback: {
          type: 'routeInput',
          iconSource: '',
          label: '意见反馈',
          onNext: this.goPage.bind(this, 'Setting')
        },
        setting: {
          type: 'routeInput',
          iconSource: '',
          label: '设置',
          onNext: this.goPage.bind(this, 'Setting')
        }
      }
    };

    return (
      <View style={{ flex: 1 }} >
        <CommonForm
          formConfig={myFormCfg}
          style={{ paddingTop: 15, paddingBottom: 0 }}
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
