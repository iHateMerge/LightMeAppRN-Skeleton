import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';

const CustomInput = ({
  title = 'Username',
  secureEntry = false,
  inputValue = '',
  isReversed = false,
  setInputValue = () => {},
}) => {
  return <View style={styles.container(isReversed)}></View>;
};

export default CustomInput;

const styles = StyleSheet.create({
  container: isReversed => ({
    flex: 1,
    paddingLeft: isReversed ? 46 : 16,
    transform: isReversed ? [{scaleX: -1}] : undefined,
  }),
});
