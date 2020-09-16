import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
const Card = ({img, text, onPress, title, btn}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{uri: img}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: '2%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
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
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  btn: {width: 100},
});
