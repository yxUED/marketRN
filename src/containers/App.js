/* @flow weak */
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import Tabs from './routes';

const App = createStackNavigator({
  Tabs: {
    screen: Tabs
  }
}, {
  mode: 'card',
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: '返回',
    title: '主页',
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
