import React from 'react';
import {StyleSheet, View} from 'react-native';

const Hr = props => {
  return <View style={styles.hr} />;
};

export default Hr;

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: 70,
    alignSelf: 'center',
  },
});
