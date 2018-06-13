import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import stylesheet from '../stylesheet/Input';

const inputStyle = stylesheet.input;
const textboxStyle = stylesheet.textbox;
const chevronBlockStyle = stylesheet.chevronBlock;
const controlLabelStyle = stylesheet.controlLabel;

export default class RouteInput extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { iconSource, label, containerStyle, last, style, text, onNext, disabled, ...others } = this.props;

    return (
      <TouchableHighlight
        style={{ opacity: disabled ? 0.3 : null }}
        disabled={disabled}
        onPress={onNext}
        underlayColor={'#ededed'}
      >
        <View style={[inputStyle, last && styles.last, containerStyle]} {...others} >
          {iconSource ? <Image style={styles.icon} source={iconSource} /> : null}
          {label ? <Text style={controlLabelStyle}>{label}</Text> : null}
          {
            Platform.OS === 'ios' ?
              <Icon style={chevronBlockStyle} name={'chevron-right'} color={'#c2c2c2'} size={26} />
              : <View style={chevronBlockStyle} />
          }
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  last: {
    borderBottomWidth: 0,
  },
  icon: {
    width: 19,
    height: 19,
    marginRight: 15
  }
});
