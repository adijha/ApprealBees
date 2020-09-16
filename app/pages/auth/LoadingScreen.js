import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {COLORS} from '../../assets/colors';
import AsyncStorage from '@react-native-community/async-storage';
import Bag from '../../assets/icons/bag.png';
export default function LoadingScreen(props) {
  const tryLogin = async () => {
    // const token = await AsyncStorage.getItem('token');
    // props.navigation.navigate(token ? 'Home' : 'SignIn');
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 2000);
  };
  useEffect(() => {
    tryLogin();
  }, [tryLogin]);
  // const tryLogin = useCallback(async () => {
  //   setTimeout(async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     props.navigation.navigate(token ? 'Home' : 'SignIn');
  //   }, 1500);
  // }, [props.navigation]);
  // useEffect(() => {
  //   tryLogin();
  // }, [tryLogin]);

  return (
    <View style={styles.container}>
      {/* <Image source={Bag} /> */}
      <Text style={{fontSize: 32, color: 'white'}}>Apparel Bees</Text>
      <Text style={{color: '#fafafa'}}>Best Online Shopping Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
});
