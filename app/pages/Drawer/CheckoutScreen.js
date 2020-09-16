import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Header from '../../components/Header';
import Shipping from './ShippingCheckout';
import Payments from './PaymentsCheckout';
import Confirmation from './ConfirmationCheckout';
import {COLORS} from '../../assets/colors';

const Tab = createMaterialTopTabNavigator();

const Checkout = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Checkout"
        rightAction={() => props.navigation.navigate('Cart')}
      />
      <Tab.Navigator
        initialRouteName="Offers"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fafafa',
          indicatorStyle: {backgroundColor: COLORS.darkPrimary},
          labelStyle: {fontSize: 12},
          showIcon: true,
          style: {backgroundColor: COLORS.primary},
        }}>
        <Tab.Screen name="Shipping" component={Shipping} />
        <Tab.Screen name="Payments" component={Payments} />
        <Tab.Screen name="Confirmation" component={Confirmation} />
      </Tab.Navigator>
    </>
  );
};

export default Checkout;