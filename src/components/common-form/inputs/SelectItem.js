import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Select from 'react-native-default-select';
import _ from 'underscore';
import stylesheet from '../stylesheet/Input';
import formatText from '../../format-text';

const inputStyle = stylesheet.input;
const selectStyle = stylesheet.select;
const chevronBlockStyle = stylesheet.chevronBlock;
const controlLabelStyle = stylesheet.controlLabel;

export default class SydSelect extends React.Component {
  constructor(props, context) {
    super(props);
  }

  _getSelectedKey(models, value) {
    const keys = Object.keys(models);
    for (let i = 0; i < keys.length; i++) {
      if (_.isEqual(models[keys[i]].value, value)) {
        return i.toString();
      }
    }
    return '0';
  }

  _onChange(models, key) {
    this.props.onChange(models[key].value);
  }

  arr2Obj = (array) => {
    const obj = {};
    array.map((val, i) => (obj[i] = val));
    return obj;
  };

  render() {
    const {
      label,
      containerStyle,
      models,
      last,
      selected,
      nullOption
    } = this.props;
    const tm = this.arr2Obj(_.union([nullOption], models));

    return (
      <View style={[inputStyle, last && styles.last, containerStyle]}>
        {label ? <formatText style={controlLabelStyle}>{label}</formatText> : null}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
          <Select
            models={tm}
            selectedKey={this._getSelectedKey(tm, selected)}
            labelStyle={selectStyle}
            onChange={this._onChange.bind(this, tm)}
          />
        </View>
        {Platform.OS === 'ios' ? <Icon style={chevronBlockStyle} name={'chevron-right'} color={'#c2c2c2'} size={26} /> : <View style={chevronBlockStyle} />}
      </View>
    );
  }
}
SydSelect.propTypes = {};
SydSelect.defaultProps = { nullOption: { label: '请选择', value: '' } };

const styles = StyleSheet.create({
  last: {
    borderBottomWidth: 0
  }
});
