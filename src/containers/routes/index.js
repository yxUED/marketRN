/* @flow weak */
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import TabRoutes from './tabRoutes';

import Login from '../other/Login';
import Setting from '../other/Setting';
import Opinion from '../other/Opinion';

import AssessList from '../other/dealer/assess/AssessList'

const AllRoutes = createStackNavigator({
    Tabs: TabRoutes,
    Login: Login,
    Setting: Setting,
    Opinion: Opinion,
    AssessList: AssessList,
}, {
  mode: 'card',
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: ' ',
    headerStyle: {
      backgroundColor: '#2784E2',
      elevation: 0,
      shadowOpacity: 0
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerBackTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white',
  },
});

export default AllRoutes;
