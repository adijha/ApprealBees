import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import Header from '../components/Header';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import {CartContext} from '../App';
import {COLORS} from '../assets/colors';
const Screen = (props) => {
  const {cartProduct, setCartProduct} = useContext(CartContext);
  const navigation = useNavigation();
  const [imgShow, setImgShow] = useState(props.route.params.item.img);
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('green');
  let updatedItem = props.route.params.item;
  if (!updatedItem.quantity) {
    updatedItem.quantity = 1;
  }

  let newCart = [];
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.params.item.title}
        leftIcon
        leftAction={() => navigation.goBack()}
        rightAction={() => props.navigation.navigate('CartDrawer')}
        rightIcon
      />
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 30,
            paddingBottom: 20,
          }}>
          <FastImage source={{uri: imgShow}} style={styles.image} />
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.item.img)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.item.img
                      ? '#F14436'
                      : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.item.img}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.item.img1)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.item.img1
                      ? '#F14436'
                      : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.item.img1}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.item.img2)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.item.img2
                      ? '#F14436'
                      : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.item.img2}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.item.img3)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.item.img3
                      ? '#F14436'
                      : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.item.img3}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 9,
            paddingBottom: 10,
          }}>
          <Text style={styles.title}>{props.route.params.item.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                fontSize: 22,
                marginTop: 5,
                color: 'red',
                marginRight: 15,
              }}>
              ₹ {props.route.params.item.price}
            </Text>
            <Text
              style={{
                color: 'grey',
                marginRight: 15,
                marginTop: 7,
                textDecorationLine: 'line-through',
              }}>
              ₹ {props.route.params.item.basePrice}
            </Text>
            <Text
              style={{
                color: '#00A650',
                fontSize: 14,
                marginTop: 7,
                fontWeight: '100',
              }}>
              {props.route.params.item.discount} off
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              paddingHorizontal: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#00A650',
                padding: 2,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: '#fff', marginRight: 10, fontSize: 13}}>
                {props.route.params.item.rating}
              </Text>
              <FontAwesomeI name="star" size={10} color="#fff" />
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                marginTop: 3,
                fontWeight: '100',
                marginLeft: 10,
              }}>
              {props.route.params.item.ratings} ratings &{' '}
              {props.route.params.item.reviews} reviews
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              paddingHorizontal: 30,
            }}>
            <Text style={{color: '#696969'}}>Avalibality: </Text>
            <Text style={{color: 'green'}}>
              {' '}
              {props.route.params.item.availablity}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#E8E8E8',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRightColor: '#E8E8E8',
                borderRightWidth: 1,
                flex: 1,
                justifyContent: 'center',
                padding: 7,
              }}>
              <FontAwesomeI name="share" size={16} color="#939393" />
              <Text style={{marginLeft: 15, color: '#939393'}}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRightColor: '#E8E8E8',
                flex: 1,
                justifyContent: 'center',
                padding: 7,
              }}>
              <FontAwesomeI name="heart" size={16} color="#939393" />
              <Text style={{marginLeft: 15, color: '#939393'}}>Wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}>
          <Text style={{marginBottom: 10, color: '#444'}}>Select Size :</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setSize('S')}
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: size === 'S' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize('M')}
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: size === 'M' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize('L')}
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: size === 'L' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize('XL')}
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: size === 'XL' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}>
          <Text style={{marginBottom: 10, color: '#444'}}>Select Color :</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setColor('green')}
              style={{
                padding: 2,
                backgroundColor: '#04BF9D',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: color === 'green' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}
            />
            <TouchableOpacity
              onPress={() => setColor('brown')}
              style={{
                padding: 2,
                backgroundColor: '#BF7E04',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: color === 'brown' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}
            />
            <TouchableOpacity
              onPress={() => setColor('grey')}
              style={{
                padding: 2,
                backgroundColor: '#733702',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: color === 'grey' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}
            />
            <TouchableOpacity
              onPress={() => setColor('pink')}
              style={{
                padding: 2,
                backgroundColor: '#B84BFF',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderColor: color === 'pink' ? 'red' : 'grey',
                borderWidth: 1,
                borderRadious: 3,
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}>
          <Text style={{marginBottom: 10, color: '#444'}}>
            Product Details :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                width: 10,
                height: 10,
                backgroundColor: 'grey',
                borderRadius: 40,
                marginRight: 10,
              }}
            />
            <Text>Sleeve Type: Half</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                width: 10,
                height: 10,
                backgroundColor: 'grey',
                borderRadius: 40,
                marginRight: 10,
              }}
            />
            <Text>Material: Cotton</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                width: 10,
                height: 10,
                backgroundColor: 'grey',
                borderRadius: 40,
                marginRight: 10,
              }}
            />
            <Text>Pattern: Striped</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              marginBottom: 10,
              color: '#444',

              paddingHorizontal: 30,
            }}>
            Customer Reviews :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#00A650',
                padding: 2,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: '#fff', marginRight: 10, fontSize: 13}}>
                5
              </Text>
              <FontAwesomeI name="star" size={10} color="#fff" />
            </View>
            <Text style={{marginLeft: 20, marginTop: 5}}>Brillient</Text>
          </View>
          <Text
            style={{
              marginTop: 10,

              paddingHorizontal: 30,
            }}>
            I love this Product
          </Text>
          <View
            style={{
              flexDirection: 'row',

              paddingHorizontal: 30,
            }}>
            <Text style={{marginTop: 10, color: 'grey'}}>Brijesh</Text>
            <Text style={{marginTop: 10, color: 'grey', marginLeft: 40}}>
              23, May, 2020
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#fafafa',
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#00A650',
                padding: 2,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: '#fff', marginRight: 10, fontSize: 13}}>
                4
              </Text>
              <FontAwesomeI name="star" size={10} color="#fff" />
            </View>
            <Text style={{marginLeft: 20, marginTop: 5}}>Brillient</Text>
          </View>
          <Text
            style={{
              marginTop: 10,

              paddingHorizontal: 30,
            }}>
            Good Product
          </Text>
          <View
            style={{
              flexDirection: 'row',

              paddingHorizontal: 30,
            }}>
            <Text style={{marginTop: 10, color: 'grey'}}>Ramesh</Text>
            <Text style={{marginTop: 10, color: 'grey', marginLeft: 40}}>
              23, June, 2020
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            flex: 1,
            backgroundColor: COLORS.primary,
            marginRight: 1,
          }}
          onPress={() => {
            cartProduct.forEach((itemm) => {
              if (itemm.title !== updatedItem.title) {
                newCart.push(itemm);
                Toast.show('Item added to cart', Toast.LONG);
              } else {
                Toast.show('Item already added to cart', Toast.LONG);
              }
            });
            newCart.push(updatedItem);
            setCartProduct(newCart);
          }}>
          <Text style={{fontSize: 17, color: 'white'}}>ADD TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('CartDrawer', {screen: 'Checkout'})
          }
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 17,
            flex: 1,
            backgroundColor: '#4FAD43',
          }}>
          <Text style={{fontSize: 17, color: 'white'}}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 310,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    marginTop: 10,
    paddingHorizontal: 30,
  },
  price: {
    fontSize: 19,
    marginTop: 7,
    color: 'red',
    paddingHorizontal: 30,
  },
  smallImage: {
    width: 50,
    resizeMode: 'cover',
    height: 50,
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '70%',
    // alignSelf: 'center',
    marginTop: -20,
    marginHorizontal: '9%',
  },
  imageClick: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 1,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
