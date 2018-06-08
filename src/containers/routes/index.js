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

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={homeIcon}
          style={[{ width: 26, height: 26 }, { tintColor }]}
        />
      ),
    }
  },
  Market: {
    screen: Market,
    navigationOptions: {
      tabBarLabel: '长时拍',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={marketIcon}
          style={[{ width: 26, height: 26 }, { tintColor }]}
        />
      ),
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={mineIcon}
          style={[{ width: 26, height: 26 }, { tintColor }]}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'blue',
    showIcon: true,
    // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    indicatorStyle: { height: 0 },
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#2784E2',
      height: 60
    },
  }
});

export default Tabs;
