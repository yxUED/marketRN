import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  WebView,
  View,
  FlatList,
  Text,
} from 'react-native';
import FormatText from '../../components/format-text';
import MarketListItem from '../../components/market-list-item';


var DEFAULT_URL = "http://192.168.155.26/#/auction/longtimeAuctionList";
var Screen = Dimensions.get('window');
const demoData = [
  {
      "id":4605,
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
  },
  {
      "id":4604,
      "carNumber":"V001140",
      "carName":"克莱斯勒 大捷龙(进口) 99款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"冀R03Z58",
      "region":-1,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"D",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1414771200000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1420560000000,
      "odographNum":20000,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/f252bb12-0b26-41f9-b5c2-dcd0ecf0b00c.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":-1,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4603,
      "carNumber":"V925038",
      "carName":"大众 宝来 08款 2.0L 手动舒适型",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"黑A7EQ16",
      "region":-1,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":35,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1222790400000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1228406400000,
      "odographNum":130000,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/c9f87bf5-3dd4-40ac-9f44-c2aa7d483e97.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":-1,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4602,
      "carNumber":"V925038",
      "carName":"大众 宝来 08款 2.0L 手动舒适型",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"黑A7EQ16",
      "region":-1,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":80,
      "grade":"D",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1222790400000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1228406400000,
      "odographNum":130000,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/4f337fa5-2b7a-4f02-bab3-067d948d9d28.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":-1,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4601,
      "carNumber":"V003166",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/a485b409-9a49-46b6-a959-be9a84e68d59.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4600,
      "carNumber":"V003165",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/c8217afb-c4f1-40b9-8aed-090020dc8b27.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4599,
      "carNumber":"V003164",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/017776c4-ca08-4b83-98f8-4e8ad4cf0ad3.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4598,
      "carNumber":"V003163",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/f275dcbd-fb12-4734-a948-cc59b93b95db.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4597,
      "carNumber":"V003162",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/5400d413-64f2-48e3-916d-7ccf1b0bf8f6.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  },
  {
      "id":4596,
      "carNumber":"V003161",
      "carName":"克莱斯勒 大捷龙(进口) 04款 大捷龙 3.3L",
      "vinCode":"",
      "expectPrice":"",
      "licencePlateNum":"京A00001",
      "region":110100,
      "carStatus":1,
      "roundStatus":4,
      "proprietaryId":"",
      "score":95,
      "grade":"A",
      "carStatusDesc":"在售",
      "roundStatusDesc":"",
      "manufactureDate":1522512000000,
      "shelveTime":"",
      "bidTime":"",
      "priceSpread":"",
      "customerServicerId":"",
      "customerServicerName":"",
      "firstRegistrationDate":1483200000000,
      "odographNum":123600,
      "pic":"https://img1.yixinfinance.com/xinxiangmu/20180613/24de7ceb-b24c-4011-92e8-fa2aea1d4845.jpg",
      "bidCount":"",
      "bidMaxPrice":0,
      "bidStartTime":"",
      "bidEndTime":"",
      "emissionStandard":4,
      "isGeFloorPrice":0,
      "isGeBidPrice":0,
      "repeatBidStart":0
  }
];

class Market extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      paused: true,
      refreshState: false,
    };
    this.refreshData = this.refreshData.bind(this);
  }

  refreshData() {
    this.setState({refreshState: true});
    setTimeout(() => {
      this.setState({refreshState: false});
    }, 1000);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <FlatList
          data={demoData}
          onRefresh={this.refreshData}
          refreshing={this.state.refreshState}
          renderItem={({item}) => <MarketListItem item={item}></MarketListItem>}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webviewWrap: {
    width: Screen.width,
    height: Screen.height
  }
});
