import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const Card = ({onPress, product, date, img}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View style={{width: '60%'}}>
          <Text style={styles.title}>{product}</Text>

          <Text style={{fontSize: 15, marginTop: 29}}>
            With the OnePlus Bullets Wireless Z Bluetooth Headset
          </Text>
          <Text style={{fontSize: 18, color: '#288AF4', marginTop: 9}}>
            Remove
          </Text>
        </View>
        <Image source={{uri: img}} style={{width: 100, height: 140}} />
      </View>
    </TouchableOpacity>
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
