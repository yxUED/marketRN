import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';

import ListHeader from '../../../../components/list-header';
import SearchBar from '../../../../components/search-bar';

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

    const headerData = [
      {number: 230, title: '评估中'},
      {number: 230, title: '采购预订'},
      {number: 89, title: '确认采购'},
      {number: 230, title: '采购失败'},
    ];
    const searchData = [
      {title: '品牌'},
      {title: '状态'},
      {title: '筛选'},
    ];

    return (
      <View style={{ flex: 1 , backgroundColor: '#ffffff'}} >
        <ListHeader data={headerData} ></ListHeader>
        <SearchBar data={searchData}></SearchBar>
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
