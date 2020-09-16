import React from 'react';

//navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
//auth
import LoadingScreen from '../pages/auth/LoadingScreen';
import SignInScreen from '../pages/auth/SignInScreen';
import SignUpScreen from '../pages/auth/SignUpScreen';
import ResetPasswordScreen from '../pages/auth/ResetPasswordScreen';
//Home
import HomeScreen from '../pages/home/HomeScreen';
import ProfileScreen from '../pages/home/ProfileScreen';
import AboutScreen from '../pages/home/AboutScreen';
import AccountSettings from '../pages/home/AccountSettings';
import AddressScreen from '../pages/home/AddressScreen';
import ReviewsScreen from '../pages/home/ReviewsScreen';
//drawer categories
import WomenDrawer from '../pages/Drawer/WomenDrawer';
import MenScreen from '../pages/Drawer/MenDrawer';
import ElectronicsDrawer from '../pages/Drawer/ElectronicsDrawer';
import CartDrawer from '../pages/Drawer/CartDrawer';
import ComboDrawer from '../pages/Drawer/ComboDrawer';
import HelpDrawer from '../pages/Drawer/HelpCenter';
import HerbalDrawer from '../pages/Drawer/HerbalDrawer';
import KitchenDrawer from '../pages/Drawer/KitchenDrawer';
import KidsDrawer from '../pages/Drawer/KidsDrawer';
import NotificationDrawer from '../pages/Drawer/NotificationDrawer';
import OrdersDrawer from '../pages/Drawer/OrdersDrawer';
import PrivacyDrawer from '../pages/Drawer/PrivacyPolicyDrawer';
import WishlistDrawer from '../pages/Drawer/WishListDrawer';
import CheckoutScreen from '../pages/Drawer/CheckoutScreen';
//product
import ProductScreen from '../pages/ProductScreen';
import CartScreen from '../pages/Drawer/CartDrawer';
//color
import {COLORS} from '../assets/colors';
// initialize navigator
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Loading"
      component={LoadingScreen}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
export const CartNavigator = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContentOptions={{
      activeTintColor: COLORS.primary,
      labelStyle: {marginVertical: -10},
    }}>
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color={COLORS.primary} />
        ),
      }}
      name="Home"
      component={HomeNavigator}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="tshirt" size={20} color={COLORS.primary} />
        ),
      }}
      name="Men"
      component={MenScreen}
      noHeader={false}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="shoe-heel"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Women"
      component={WomenDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="cellphone-iphone"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Electronics"
      component={ElectronicsDrawer}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="apps"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Combo"
      component={ComboDrawer}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="leaf"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Herbal"
      component={HerbalDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="lamp"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Home & Kitchen"
      component={KitchenDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="record-player"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Kids"
      component={KidsDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="bell-ring"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="Notification"
      component={NotificationDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="account"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="My Account"
      component={ProfileScreen}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="cart"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="My Cart"
      component={CartNavigator}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="basket"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="My Orders"
      component={OrdersDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="heart"
            size={23}
            color={COLORS.primary}
          />
        ),
      }}
      name="My Wishlist"
      component={WishlistDrawer}
    />
    <Drawer.Screen name="Help Center" component={HelpDrawer} />
    <Drawer.Screen name="Privacy Policy" component={PrivacyDrawer} />
    <Drawer.Screen name="About Us" component={AboutScreen} />
  </Drawer.Navigator>
);

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="Auth"
          component={LoadingScreen}
        />
        <Stack.Screen name="Home" component={DrawerScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="CartDrawer" component={CartNavigator} />

        <Stack.Screen name="Settings" component={AccountSettings} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
