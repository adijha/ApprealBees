import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';

const SettingsScreen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="My Reviews"
      />
      <TouchableOpacity
        style={{
          padding: 20,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 6,
          margin: 20,
          borderColor: 'grey',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '70%'}}>
          <Text style={{marginBottom: 10, fontSize: 16, fontWeight: 'bold'}}>
            OnePlus Bullet Wireless
          </Text>
          <Text style={{fontSize: 14}}>
            I ondered this one for my mother now she forgot me, she is with this
            earphone always.
          </Text>
        </View>
        <Image
          source={{uri: 'https://source.unsplash.com/weekly?app'}}
          style={{width: 70, height: 70}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 6,
          marginHorizontal: 20,
          borderColor: 'grey',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '70%'}}>
          <Text style={{marginBottom: 10, fontSize: 16, fontWeight: 'bold'}}>
            Boat Bullet Wireless
          </Text>
          <Text style={{fontSize: 14}}>
            This one is my daily driver, I use this more often.
          </Text>
        </View>
        <Image
          source={{uri: 'https://source.unsplash.com/weekly?mobile'}}
          style={{width: 70, height: 70}}
        />
      </TouchableOpacity>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
