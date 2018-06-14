import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  WebView,
  View,
  FlatList,
  Text,
  Image,
} from 'react-native';


class MarketListItem extends Component {
  constructor(props, context) {
    super(props);
    /**
     *       "id":4605,
      "carNumber":"V001141",
      "carName":"克莱斯勒 大捷龙(进口) 99款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"冀R03Z58",
      "region":-1,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":65,
      "grade":"C",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1414771200000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1420560000000,
      "odographNum":1000,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/507635fc-5151-45cd-b018-1727edb7f4eb.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":-1,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
     */
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.leftWarp} >
          <Image
          style={styles.icon}
          source={{url: this.props.item.pic}}
          ></Image>
        </View>
        <View style={styles.rightWarp} >
          <Text>{this.props.item.carName}</Text>
        </View>
      </View>
    );
  }
}


export default MarketListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: '100%',
    height: 100,
  },
  leftWarp: {
    width: 100,
  },
  rightWarp: {
    flex: 1,
  }
});