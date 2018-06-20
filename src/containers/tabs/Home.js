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
  ScrollView,
  Alert,
} from 'react-native';
import HomeIcon from '../../components/home-icon'

const iconData = [
  [
    { title: '车源预告', icon: require('../../img/homeIcon/preview.png')},
    { title: '定时拍', icon: require('../../img/homeIcon/timing.png')},
    { title: '长时拍', icon: require('../../img/homeIcon/long.png')},
  ],
  [
      { title: '评估管理', page: 'AssessList', icon: require('../../img/homeIcon/icon_assess.png')},
      { title: '库存管理', icon: require('../../img/homeIcon/icon_store.png')},
      { title: '客户管理', icon: require('../../img/homeIcon/icon_client.png')},
  ],
  [
      { title: '采购订单', icon: require('../../img/homeIcon/icon_shop.png')},
      { title: '销售订单', icon: require('../../img/homeIcon/icon_sale.png')},
      { title: '整备管理', icon: require('../../img/homeIcon/icon_ready.png')},
  ],
  [
      { title: '牌证管理', icon: require('../../img/homeIcon/icon_card.png')},
      { title: '行情估价', icon: require('../../img/homeIcon/icon_price.png')},
      { title: '员工管理', icon: require('../../img/homeIcon/icon_staff.png')},
  ]
];

class Home extends Component {
  constructor(props, context) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onHomeIconPress = this.onHomeIconPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        {/* <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
<<<<<<< Updated upstream
        </TouchableOpacity> */}
        {
          iconData.map((items, index) => <HomeIcon homeIconPress={this.onHomeIconPress} index={index} data={items} ></HomeIcon>)
        }
      </ScrollView>
=======
        </TouchableOpacity>
        <Text>没有！ again</Text>
        <WebView
          ref={(webview) => { this.webview = webview; }}
          style={{
            width: Dimensions.get('window').width,
            height: 6000
          }}
          source={{ uri: 'https://reactnative.cn/' }}
        />
      </View>
>>>>>>> Stashed changes
    );
  }
  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE,
        deploymentKey: 'fY3hyt6uyEct4XazZ3dFXdv4twVY4ksvOXqog'
    });
  }
  onHomeIconPress(item) {
    if (item.page) {
      this.props.navigation.navigate(item.page, { title: item.title})
      return;
    }

    Alert.alert(
      // 'Alert Title',
      item.title,
      item.title,
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '确定', onPress: () => console.log('OK Pressed')},
      ],
      // { cancelable: false }
    )
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
    height: '100%',
    backgroundColor: '#ffffff',
  }
});
