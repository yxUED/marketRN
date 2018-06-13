import React from 'react';
import { View } from 'react-native';
import _ from 'underscore';
import TextBox from './inputs/TextBox';
import TextArea from './inputs/TextArea';
import SelectItem from './inputs/SelectItem';
import RouteInput from './inputs/RouteInput';
import PhoneNumberInput from './inputs/PhoneNumberInput';
import Datepicker from './inputs/Datepicker';

import stylesheet from './stylesheet/Form';
import formatText from '../format-text';

const fieldsetStyle = stylesheet.fieldset;
const formStyle = stylesheet.formStyle;
const formTitleStyle = stylesheet.formTitle;
const errorList = stylesheet.errorList;
const errorItem = stylesheet.errorItem;

export default class SydForm extends React.Component {
  constructor(props, context) {
    super(props);
  }

  _hasType(config = {}) {
    return Object.hasOwnProperty.call(config, 'type');
  }

  _getElement(config, innerProps) {
    const { type, ...noTypeCfg } = config;
    const postCfg = Object.assign({}, noTypeCfg , innerProps);
    switch (type) {
      case 'select':
        return <SelectItem {...postCfg} />;
      case 'textbox':
        return <TextBox {...postCfg} />;
      case 'textArea':
        return <TextArea {...postCfg} />;
      case 'routeInput':
        return <RouteInput {...postCfg} />;
      case 'phoneNumberInput':
        return <PhoneNumberInput {...postCfg} />;
      case 'datepicker':
        return <Datepicker {...postCfg} />;
      default:
        return null;
    }
  }

  _getChildren(config) {
    const keys = Object.keys(config);
    const count = keys.length;
    const children = [];
    if (count > 1) {
      for (let i = 0; i < count; i++) {
        const key = keys[i];
        if (this._hasType(config[key])) {
          children.push(this._getElement(config[key], { last: i === count - 1, key: i.toString() }));
        } else {
          console.error(`the type of ${key} didn't match any input type`);
        }
      }
      return children;
    } else if (count === 1) {
      if (this._hasType(config[keys[0]])) {
        return this._getElement(config[keys[0]], { last: true });
      }
      return console.error(`the type of ${keys[0]} didn't match any input type`);
    } else {
      return null;
    }
  }

  render() {
    const {
      formConfig,
      style
    } = this.props;
    const label = formConfig.label;
    const hasError = formConfig.hasError;
    const errors = formConfig.errors;
    const fieldCfg = formConfig.fields;
    return (
      <View style={[formStyle, style]}>
        {label ? <formatText style={formTitleStyle}>{label}</formatText> : null}
        <View style={fieldsetStyle}>{this._getChildren(fieldCfg)}</View>
        {hasError ? (
          <View style={errorList}>
            {
              Array.isArray(errors) ?
              errors.map((e, i) => (_.isEmpty(e) ? null : <formatText key={i} style={errorItem}>{e}</formatText>))
              : <formatText style={errorItem}>{errors}</formatText>
            }
          </View>
         ) : null}
      </View>
    );
  }
}
