import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import Button from '../../components/Button';

const SettingsScreen = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    checkLogin();
  });
  const checkLogin = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Details"
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <Text style={{textAlign: 'center', marginVertical: 50, fontSize: 20}}>
        This is Detail Screen
      </Text>
      {loggedIn ? <Button title="Log Out" onPress={logOut} /> : null}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
