import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../../components/Header';
import OrderProduct from '../../components/OrderProduct';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import {COLORS} from '../../assets/colors';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';

const Screen = props => {
  const [review, setReview] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
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

      <Modal show={show} onClose={() => setShow(false)}>
        <Text
          style={{fontSize: 18, alignSelf: 'center', color: COLORS.primary}}>
          Write a review
        </Text>

        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: StyleSheet.hairlineWidth,
            marginTop: 20,
            height: 90,
            marginHorizontal: 10,
          }}
          autoCapitalize="none"
          onChangeText={value => setReview(value)}
          value={review}
          multiline
        />
        <View
          style={{flexDirection: 'row', marginTop: 15, alignSelf: 'center'}}>
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

        <Button
          title="Add Review"
          style={{marginTop: 30}}
          onPress={() => {
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
          loading={loading}
        />
      </Modal>
      <ScrollView style={styles.container}>
        <OrderProduct
          product="OnePlus Bullets Wireless Z Bluetooth Headset"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?oneplus"
          rating={5}
          onReview={() => setShow(true)}
        />
        <OrderProduct
          product="Lipstick"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?lipstick"
          rating={3}
          onReview={() => setShow(true)}
        />
        <OrderProduct
          product="Hilander Tshirt"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?wear"
          rating={3}
          onReview={() => setShow(true)}
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
