import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';


export default class FormatText extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { style, ...others } = this.props;
    return (
      <Text style={[styles.text, style]} {...others} >{this.props.children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 14,
    backgroundColor: 'transparent'
  }
});
