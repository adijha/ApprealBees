import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {COLORS} from '../assets/colors';
const Card = ({img, text, onPress, title, btnName, align}) => {
  return (
    <View style={styles.card} onPress={onPress}>
      <Image source={{uri: img}} style={styles.image} />
      <View
        style={{
          marginLeft: align === 'right' ? '-39%' : '-89%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 13,
            color: '#fff',
            alignSelf: 'center',
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 29,
            color: '#fff',
            fontWeight: 'bold',
            letterSpacing: 2,
          }}>
          {title}
        </Text>
        <TouchableOpacity style={{margin: 0, padding: 0}}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {btnName}
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              width: '70%',
              alignSelf: 'center',
              borderColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    flexDirection: 'row',
  },
  text: {},
  title: {},
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  base: {},
  btn: {},
});
