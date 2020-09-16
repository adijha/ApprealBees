import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {COLORS} from '../assets/colors';
const Card = ({img, text, onPress, title, btn, subTitle}) => {
  return (
    <View style={styles.card}>
      <Text style={{fontSize: 29, color: '#fff', fontWeight: 'bold'}}>
        {title}
      </Text>
      <Text style={{fontSize: 18, color: '#fff', marginTop: 8}}>{text}</Text>
      <Text
        style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginTop: 8}}>
        {subTitle}
      </Text>
      <TouchableOpacity style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {btn}
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            width: '70%',
            alignSelf: 'center',
            borderColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    marginBottom: 15,
    // marginLeft: '2%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    alignItems: 'center',
    alignSelf: 'center',
    padding: 19,
  },
});
