import React from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatText from '../../format-text';
import stylesheet from '../stylesheet/Input';

const inputStyle = stylesheet.input;
const textboxStyle = stylesheet.textbox;
const errorBlockStyle = stylesheet.errorBlock;
const controlLabelStyle = stylesheet.controlLabel;

export default class TextBox extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { label, hasError, containerStyle, defaultValue, last, style, onChange, ...others } = this.props;
    return (
      <View style={[inputStyle, last && styles.last, containerStyle]}>
        {label ? <formatText style={controlLabelStyle}>{label}</formatText> : null}
        <TextInput
          onChangeText={onChange}
          underlineColorAndroid={'transparent'}
          style={[textboxStyle, style]}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          defaultValue={`${defaultValue}`}
          placeholderTextColor={'#c2c2c2'}
          {...others}
        />
        {
          hasError ?
            <Icon style={errorBlockStyle} name={'error'} color={'#ee5930'} size={18} />
          : <View style={errorBlockStyle} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  last: {
    borderBottomWidth: 0
  }
});
