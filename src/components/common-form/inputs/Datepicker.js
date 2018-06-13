import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import stylesheet from '../stylesheet/Input';
import formatText from '../../format-text';

const inputStyle = stylesheet.input;
const chevronBlockStyle = stylesheet.chevronBlock;
const controlLabelStyle = stylesheet.controlLabel;
const datepicker = stylesheet.datepicker;

export default class Datepicker extends React.Component {
  constructor(props, context) {
    super(props);
  }

  _onChange(value) {
    const dateValue = Moment(value, 'YYYY年MM月DD日').format('YYYYMMDD');
    this.props.onChange(dateValue);
  }

  render() {
    const { iconSource, label, containerStyle, last, date, disabled, placeholder, ...others } = this.props;
    let dateString;
    if (Moment(date).isValid()) {
      dateString = Moment(date).format('YYYY年MM月DD日');
    } else {
      dateString = '';
    }

    return (
      <TouchableHighlight
        style={{ opacity: disabled ? 0.3 : null }}
        disabled={disabled}
        underlayColor={'#ededed'}
      >
        <View style={[inputStyle, last && styles.last, containerStyle]} {...others} >
          {iconSource ? <Image style={styles.icon} source={iconSource} /> : null}
          {label ? <formatText style={controlLabelStyle}>{label}</formatText> : null}
          <DatePicker
            style={{ flex: 1, alignItems: 'flex-end' }}
            showIcon={false}
            date={dateString}
            mode="date"
            placeholder={placeholder}
            format="YYYY年MM月DD日"
            confirmBtnText="确认"
            cancelBtnText="取消"
            customStyles={datepicker}
            onDateChange={this._onChange.bind(this)}
          />
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
