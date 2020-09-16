import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import Button from './Button';
const Card = ({
  img1,
  img2,
  img3,
  img4,
  onPress1,
  onPress2,
  onPress3,
  onPress4,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.round} onPress={onPress1}>
        <Image source={{uri: img1}} style={styles.image} />
        <Text style={styles.text}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.round} onPress={onPress2}>
        <Image source={{uri: img2}} style={styles.image} />
        <Text style={styles.text}>{text2}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.round} onPress={onPress3}>
        <Image source={{uri: img3}} style={styles.image} />
        <Text style={styles.text}>{text3}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.round} onPress={onPress4}>
        <Image source={{uri: img4}} style={styles.image} />
        <Text style={styles.text}>{text4}</Text>
      </TouchableOpacity>
    </View>
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
    padding: 15,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
  },
  image: {
    resizeMode: 'cover',
    height: 70,
    width: 70,
    borderRadius: 70,
  },
});
