import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
const Card = ({onPress, product, date, img, onReview}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View style={{width: '60%'}}>
          <Text style={styles.title}>{product}</Text>
          <Text style={[styles.text, {marginTop: 20}]}>
            Delivered on {date}
          </Text>
        </View>
        <Image source={{uri: img}} style={{width: 100, height: 100}} />
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#F5ECC1',
          marginBottom: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeI
            name="star"
            size={20}
            color="#16BE48"
            style={{marginHorizontal: 4}}
          />
          <FontAwesomeI
            name="star"
            size={20}
            color="#16BE48"
            style={{marginHorizontal: 4}}
          />
          <FontAwesomeI
            name="star"
            size={20}
            color="#16BE48"
            style={{marginHorizontal: 4}}
          />
          <FontAwesomeI
            name="star"
            size={20}
            color="#16BE48"
            style={{marginHorizontal: 4}}
          />
          <FontAwesomeI
            name="star"
            size={20}
            color="#e0e0e0"
            style={{marginHorizontal: 4}}
          />
        </View>
        <TouchableOpacity onPress={onReview}>
          <Text style={{fontSize: 18, color: '#288AF4'}}>Write a review</Text>
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
    marginHorizontal: '3%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 12,
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
