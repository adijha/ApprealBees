import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import {COLORS} from '../../assets/colors';
import {CartContext} from '../../App';

const CartScreen = props => {
  const {cartProduct, setCartProduct} = useContext(CartContext);
  const [update, setUpdate] = useState(false);
  useEffect(() => {}, [update, cartProduct]);

  const getPrice = () => {
    let updatedPrice = [];
    cartProduct.forEach(element => {
      updatedPrice.push(Number(element.price) * Number(element.quantity));
    });
    return updatedPrice.length > 1
      ? updatedPrice.reduce((a, b) => a + b)
      : updatedPrice[0]
      ? Number(updatedPrice[0])
      : 0;
  };
  const getQuantity = () => {
    let updatedPrice = [];
    cartProduct.forEach(element => {
      updatedPrice.push(element.quantity);
    });
    return updatedPrice.length > 1
      ? updatedPrice.reduce((a, b) => Number(a) + Number(b))
      : updatedPrice[0]
      ? updatedPrice[0]
      : 0;
  };

  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="My Cart"
        rightAction={() => props.navigation.navigate('My Cart')}
      />

      <View style={{backgroundColor: '#fff'}}>
        {cartProduct.length > 0 ? (
          <ScrollView>
            {cartProduct.map((item, index) => (
              <View key={index}>
                {item.quantity && item.title && item.price ? (
                  <CartProduct
                    key={index + 1}
                    product={item.title}
                    size={item.size}
                    color={item.color}
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                    img={item.img}
                    plusPress={() => {
                      if (item.quantity > 0) {
                        let newCart = [];
                        let updatedItem = item;
                        let index = '';
                        cartProduct.forEach((itemm, i) => {
                          if (itemm.title !== item.title) {
                            newCart.push(itemm);
                          } else {
                            index = i;
                          }
                        });
                        updatedItem.quantity++;
                        newCart.splice(index, 0, updatedItem);

                        setCartProduct(newCart);
                      }
                    }}
                    minusPress={() => {
                      if (item.quantity > 0) {
                        let newCart = [];
                        let updatedItem = item;
                        let index = '';
                        cartProduct.forEach((itemm, i) => {
                          if (itemm.title !== item.title) {
                            newCart.push(itemm);
                          } else {
                            index = i;
                          }
                        });
                        if (Number(updatedItem.quantity) < 2) {
                          setCartProduct(newCart);
                        } else {
                          updatedItem.quantity--;
                          newCart.splice(index, 0, updatedItem);
                          setCartProduct(newCart);
                        }
                      }
                    }}
                  />
                ) : null}
              </View>
            ))}

            <View style={styles.bar}>
              <View>
                <Text style={{fontSize: 14, marginBottom: 5}}>Items: </Text>
                <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
                  Shipping Charge
                </Text>
                <Text style={{fontSize: 15, marginBottom: 5, color: '#819088'}}>
                  Total Amount
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <Text style={{fontSize: 14, marginBottom: 5}}>
                  {getQuantity()}
                </Text>
                <Text
                  style={{fontSize: 14, marginBottom: 5, color: COLORS.green}}>
                  Free
                </Text>
                <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
                  ₹ {getPrice()}
                </Text>
              </View>
            </View>

            <View style={styles.price}>
              <Text style={{fontSize: 26, margin: 20}}>₹ {getPrice()}</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate('Checkout')}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: 'center',
              height: Dimensions.get('screen').height,
              paddingTop: 50,
            }}>
            <Image
              source={require('../../assets/images/emptyCart.png')}
              style={{width: 200, height: 200}}
            />
            <Text style={{fontSize: 16, marginVertical: 40}}>
              No Product in cart
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.btnText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  bar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  btn: {
    height: 50,
    width: 170,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
  },
  price: {
    paddingBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
});
