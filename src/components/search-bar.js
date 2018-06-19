import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


function Item(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.data.title}</Text>
    </View>
  );
}

class SearchBar extends Component {
  constructor(props, context) {
    super(props);
  }
  render() {
    let el = this.props.data.map( (item, index) => <Item hiddenLine={this.props.data.length === index + 1} data={item}></Item> )
    return (
      <View style = {styles.container}>
        {el}
      </View>
    );
  }
}


export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    paddingTop: 10,
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#495362',
    fontSize: 18,
  },
  title: {
    color: '#757E8B',
    fontSize: 11,
  },
  line: {
    position: 'absolute',
    backgroundColor: '#EEEEEE',
    right: 0,
    top: 20,
    width: 1,
    height: 30,
  }
});