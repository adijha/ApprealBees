import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FeatherI from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';

const CartProduct = props => {
  return (
    <View>
      {props.quantity > 0 ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.img}>
            <FastImage
              source={{
                uri: props.img,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>{props.product}</Text>
            <Text style={{fontSize: 14, color: '#819088'}}>
              Size: {props.size} Color: {props.color}
            </Text>
            <Text style={{fontSize: 23, color: '#1FB5EE'}}>
              ₹ {props.price}
            </Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <TouchableOpacity onPress={props.plusPress}>
              <FeatherI name="plus" size={25} color="#D0D0D0" />
            </TouchableOpacity>
            <View style={styles.quantity}>
              <Text style={{fontSize: 25, color: '#1FB5EE'}}>
                {props.quantity}
              </Text>
            </View>
            <TouchableOpacity onPress={props.minusPress}>
              <FeatherI name="minus" size={25} color="#D0D0D0" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  quantity: {
    height: 30,
    width: 30,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  img: {
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.2,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  image: {
    width: 80,
    resizeMode: 'cover',
    height: 80,
    alignSelf: 'center',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
