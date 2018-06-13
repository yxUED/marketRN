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
  Home: Home,
  Market: Market,
  Account: Account,
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
	navigationOptions:({navigation}) => {
		let tabIcon, labelName, tabIconPress;
		switch (navigation.state.routeName) {
			case 'Home':
				tabIcon = homeIcon;
				tabIconPress = homeIconPress;
				labelName = '首页';
				break;
			case 'Market':
				tabIcon = marketIcon;
				tabIconPress = marketIconPress;
				labelName = '长时拍';
				break;
			case 'Account':
				tabIcon = mineIcon;
				tabIconPress = mineIconPress;
				labelName = '我的';
				break;
			default:
		}
    return {
			tabBarIcon: ({ focused, tintColor }) => {
				return (
					<Image
						source={ focused ? tabIconPress : tabIcon }
						style={[{ width: 26, height: 26 }, { tintColor }]}
					/>
				);
			},
			tabBarLabel: labelName
		}
	},
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

const navTitleMap = {
	Home: '首页',
	Market: '长时拍',
	Account: '我的',
}
Tabs.navigationOptions = ({navigation}) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = navTitleMap[routeName];
  return {
    headerTitle,
  };
}

export default Tabs;
