import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';

import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
const Card = ({icon, text, onPress, title}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.icon}>
        <FontAwesomeI name={icon} size={35} color="#FB7A52" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingBottom: 15,
    fontSize: 14,
    color: 'grey',
  },
  title: {
    paddingTop: 10,
    fontSize: 17,
    color: 'black',
  },
  textContainer: {
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
