import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../constants/colors';

const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_grey,
  },
});
