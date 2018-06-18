//自定义 button 组件
import React, {
    Component
} from 'react'
//React 15.5后将验证器单独拿出来，没有放在React中 执行:npm install prop-types 即可
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

class CustomButton extends Component {
    //使用时：enable是必须存在的
    static propTypes = {
        enable: PropTypes.bool.isRequired
    };

    render() {
        return (
            <View>
                {this._renderButton()}
            </View>
        );
    }

    _renderButton() {
        //可点击与不点击样式不同
        if (this.props.enable===true) {
            return(
                <TouchableOpacity
                    onPress={this.props.onPress}
                    //this.props.buttonStyle传入此样式属性，修改背景色，边框大小，颜色
                    style={[styles.button, this.props.buttonStyle]}>
                    <View style={styles.viewText}>
                        //this.props.textStyle传入此样式属性，修改字体大小，颜色
                        <Text style={[styles.textMeg, this.props.textStyle]}>{this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return(
                <View style={[styles.button, this.props.buttonStyle, styles.buttonNotEnable]}>
                    <View style={styles.viewText}>
                        //this.props.text传入此属性，可以动态修改文字
                        <Text style={styles.textMeg}>{this.props.text}</Text>
                    </View>
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    viewText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMeg: {
        color: 'white',
        fontSize: 18,
    },
    button: {
        height: 44,
        borderRadius: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNotEnable: {
        backgroundColor: '#B8B8B8',
    }
});

export default CustomButton;