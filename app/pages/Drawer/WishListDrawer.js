import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import WishlistProduct from '../../components/WishlistProduct';

const Screen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.name}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <ScrollView style={styles.container}>
        <WishlistProduct
          product="OnePlus Bullets Wireless Z Bluetooth Headset"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?neckband"
          rating={5}
        />
        <WishlistProduct
          product="Lipstick"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?sexy"
          rating={3}
        />
        <WishlistProduct
          product="Hilander Tshirt"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?cloth"
          rating={3}
        />
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 17,
  },
});
