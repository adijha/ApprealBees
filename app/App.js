import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MainNavigator from './navigation/mainNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const CartContext = React.createContext([]);
export default function App() {
  let initialState = [
    {
      title: 'Realme XT (6gb)',
      img: 'https://source.unsplash.com/weekly?app',

      price: '10000',
      quantity: 3,

      color: 'green',
      size: '32',
    },
    {
      title: 'Realme X3 (6gb)',
      img: 'https://source.unsplash.com/weekly?app',

      price: '10000',
      quantity: 1,
      color: 'green',
      size: '32',
    },
  ];
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <CartContext.Provider value={{cartProduct, setCartProduct}}>
        <MainNavigator />
      </CartContext.Provider>
    </SafeAreaView>
  );
}
