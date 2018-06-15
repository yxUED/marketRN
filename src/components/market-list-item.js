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
  // 处理时间
  formateDate(val, format, separators) {
    function addZero(num) {
      return num < 10 ? `0${num}` : num;
    }
    if (val) {
      const d = new Date(val);
      const sptors = separators || '-';
      let dformat;
      switch (format) {
        case 'yyyy':
          dformat = d.getFullYear();
          break;
        case 'yyyy-MM':
          dformat = [d.getFullYear(), addZero(d.getMonth() + 1)].join(sptors);
          break;
        case 'yyyy-MM-dd':
          dformat = [d.getFullYear(), addZero(d.getMonth() + 1), addZero(d.getDate())].join(sptors);
          break;
        case 'hh-mm':
          dformat = [addZero(d.getHours()), addZero(d.getMinutes())].join(sptors);
          break;
        case 'hh-mm-ss':
          dformat = [addZero(d.getHours()), addZero(d.getMinutes()), addZero(d.getSeconds())].join(sptors);
          break;
        default:
          dformat = [d.getFullYear(), addZero(d.getMonth() + 1), addZero(d.getDate())].join(sptors);
      }
      return dformat;
    }
    return '--';
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
          <Text style={{fontSize: 14, color: '#242527'}} >{this.props.item.carName}</Text>
          <Text style={{fontSize: 11, color: '#757E8B'}} >{this.formateDate(this.props.item.manufactureDate) + ' | ' + this.props.item.score + '万公里' }</Text>
          <Text style={{fontSize: 11, color: '#757E8B'}} >当前<Text style={{fontSize: 14, color: '#F7634F'}} >{this.props.item.bidMaxPrice}</Text>万元</Text>
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
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#f8f8f8',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 108,
    height: 72,
  },
  leftWarp: {
    width: 108,
    marginRight: 8,
  },
  rightWarp: {
    flex: 1,
  }
});