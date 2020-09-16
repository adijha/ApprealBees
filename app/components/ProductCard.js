import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
const Card = ({img, price, onPress, text}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{padding: 15}}>
        <Image source={{uri: img}} style={styles.image} />
      </View>
      <View style={styles.base}>
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.price}>Rs. {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    margin: '3%',
    width: '44%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  text: {
    paddingBottom: 3,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  price: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 16,
    paddingBottom: 4,
  },
});
