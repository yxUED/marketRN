import {connect} from 'react-redux';
import React, {Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormatText from '../../components/format-text';

//自定义 button 组件
import CustomButton from './CustomButton'
//自定义 actionSheet 组件
import CustomActionSheet from './CustomActionSheet'
class Account extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            text: '',
            click: false,
            isModal:false, //控制 Modal
            defaultItem:'产品建议',
            items:['产品建议','程序错误','其他'],
        };
    }
    showModal() {
            this.showActionSheet.showModal();
    }
    //回传的值
    popBack(rowdata) {
        //我们在父组件中实现的方法，rowdata是我们的子组件传递过来的数据。
        //alert(rowdata);
        this.setState({defaultItem:rowdata })
    }

    static navigationOptions = () => ({title: "意见反馈"});

    render() {
        const {navigate} = this.props.navigation;

        const changeState = () => {
            this.setState({
                click: true,

            })
        };
        const alertMsg = () => {
            alert("alertMsginInfo");
        };
        return (
            <View style={styles.container}>
                <View style={styles.textViewStyle}>
                    <Text style={{lineHeight: 44, paddingLeft: 10}}>反馈类型
                    </Text>
                    <TouchableOpacity
                        style={styles.touchStyle}
                        onPress={() => this.showModal()}
                    >
                        <Text style={{lineHeight: 44}}>{this.state.defaultItem} ></Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleStyle}>详细描述您的建议(必填)</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="请填写反馈建议"
                    multiline={true}
                    maxLength={200}
                    // autoFocus={true}//自动获取焦点
                    underlineColorAndroid={'transparent'}//输入框的线框为透明
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.tip}>{this.state.text.length}/200</Text>
                <CustomButton
                    text='提交'
                    enable={true}
                    buttonStyle={styles.commitStyle}
                    tex
                    onPress={this.alertMsg}/>
                <CustomActionSheet
                    items={this.state.items}
                    ref={showActionSheet => this.showActionSheet = showActionSheet}
                    callBackFunc={(rowdata)=>{this.popBack(rowdata)}}
                ></CustomActionSheet>


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

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
    container: Platform.select({
        ios: {
            flex:1,


        },
        android: {}
    }),

    scrollView: Platform.select({
        ios: {
            backgroundColor: '#f5f5f5'
        },
        android: {}
    }),
    scrollViewContainer: Platform.select({
        ios: {
            flex: 1,
            backgroundColor: '#f5f5f5'
        },
        android: {}
    }),
    textViewStyle: Platform.select({
        ios: {
            height: 44,
            backgroundColor: '#ffffff',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        android: {}
    }),
    touchStyle: Platform.select({
        ios: {
            marginRight:20,

        },
        android: {}
    }),
    textInputStyle: Platform.select({
        ios: {
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 5,
            height: 300,
            backgroundColor: '#ffffff'
        },
        android: {}
    }),
    tip: Platform.select({
        ios: {
            marginRight: 10,
            marginTop: -20,
            textAlign: 'right',//文字靠右
            color: '#E0E0E0'
        },
        android: {}
    }),
    titleStyle: Platform.select({
        ios: {
            paddingLeft: 10,
            color: '#2784E2',
            marginTop: 5,
            fontSize: 12
        },
        android: {}
    }),
    commitStyle: Platform.select({
        ios: {
            // color: 'white',
            backgroundColor: '#2784E2',
            height: 44,
            marginTop: 25,

        },
        android: {}
    }),

});
