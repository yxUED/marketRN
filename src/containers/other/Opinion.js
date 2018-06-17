
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormatText from '../../components/format-text';

//自定义 button 组件
import CustomButton from './CustomButton'

class Account extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            text: '',
            click: false,
        };
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
            <View>
                <View style={styles.textViewStyle}>
                    <Text style={{lineHeight: 44, paddingLeft: 10}}>反馈类型
                    </Text>
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
            backgroundColor: '#ffffff'
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
            color:'#E0E0E0'
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
