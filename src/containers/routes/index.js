import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import {
  Image
} from 'react-native';
import Home from '../tabs/Home';
import Market from '../tabs/Market';
import Account from '../tabs/Account';

import homeIcon from '../../img/tabbar/toolbar-home-icon-normal.png';
import marketIcon from '../../img/tabbar/toolbar-study-icon-normal.png';
import mineIcon from '../../img/tabbar/toolbar-mine-icon-normal.png';
import homeIconPress from '../../img/tabbar/toolbar-home-icon-press.png';
import marketIconPress from '../../img/tabbar/toolbar-study-icon-press.png';
import mineIconPress from '../../img/tabbar/toolbar-mine-icon-press.png';

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? homeIconPress : homeIcon}
          style={[{ width: 26, height: 26 }]}
        />
      ),
    }
  },
  Market: {
    screen: Market,
    navigationOptions: {
      tabBarLabel: '长时拍',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? marketIconPress : marketIcon}
          style={[{ width: 26, height: 26 }]}
        />
      ),
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? mineIconPress : mineIcon}
          style={[{ width: 26, height: 26 }]}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#149DFF',
    showIcon: true,
    // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    indicatorStyle: { height: 0 },
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#ffffff',
      height: 60
    },
  }
});

Tabs.navigationOptions = ({navigation}) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;
  return {
    headerTitle,
  };
}

export default Tabs;
