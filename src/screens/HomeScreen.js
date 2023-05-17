import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_grey,
  },
});
