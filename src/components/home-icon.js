import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {styles.item}>
        <Image
        style={styles.icon}
        source={this.props.data.icon}
        resizeMode='center'
        ></Image>
        <Text style={{fontSize: 14, color: '#242527', paddingBottom: 5}} >{this.props.data.title}</Text>
      </View>
    );
  }
}

class IconItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {[styles.container, this.props.index===0?{backgroundColor: '#2784E2'}:{}]}>
        {
          this.props.data.map((item) => <Item data={item} ></Item>)
        }
      </View>
    );
  }
}


export default IconItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 108,
    height: 60,
  },
});