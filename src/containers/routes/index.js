/* @flow weak */
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import TabRoutes from './tabRoutes';

const AllRoutes = createStackNavigator({
  Tabs: {
    screen: TabRoutes
  }
}, {
  mode: 'card',
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: '返回',
    headerStyle: {
      backgroundColor: '#2784E2'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerBackTitleStyle: {
      color: 'white'
    }
  },
});

export default AllRoutes;
