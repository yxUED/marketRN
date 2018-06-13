import React from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import stylesheet from '../stylesheet/Input';
import formatText from '../../format-text';

const inputStyle = stylesheet.input;
const textboxStyle = stylesheet.textbox;
const controlLabelStyle = stylesheet.controlLabel;
const COUNTRY_NUMBER = '+86';

export default class PhoneNumberInput extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { containerStyle, last, style, value, onChange, ...others } = this.props;

    return (
      <View style={[inputStyle, last && styles.last, containerStyle]}>
        <formatText style={[controlLabelStyle, styles.phoneLabel]}>{COUNTRY_NUMBER}</formatText>
        <TextInput
          onChangeText={onChange}
          keyboardType={'numeric'}
          underlineColorAndroid={'transparent'}
          style={[textboxStyle, styles.textInput, style]}
          placeholderTextColor={'#c2c2c2'}
          value={value}
          {...others}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  phoneLabel: {
    paddingTop: 2,
  },
  textInput: {
    textAlign: 'left'
  },
  last: {
    borderBottomWidth: 0
  }
});
