import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default class TextArea extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { onChange, ...others } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={true}
          underlineColorAndroid={'transparent'}
          onChangeText={onChange}
          placeholderTextColor={'#c2c2c2'}
          returnKeyType={'done'}
          {...others}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    marginLeft: 15,
    marginBottom: 7,
    fontSize: 12,
    color: '#999',
  },
  inputContainer: {
  },
  input: {
    height: 80,
    margin: 15,
    fontSize: 14,
    paddingLeft: 0,
    color: '#333'
  }
});
