import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-community/async-storage';
import AuthApi from '../../api/Auth';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
export default function SignInScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [space, setSpace] = useState(false)
  const onSubmit = async event => {
    event.preventDefault();
    setSpace(false);
    setLoading(true);
    if (email.length < 3 || password.length < 3) {
      setErrorMessage('Fill out the form');
      setLoading(false);
    } else {
      try {
        const response = await AuthApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        setLoading(false);
        props.navigation.navigate('Home');
      } catch (error) {
        setErrorMessage('Something went wrong');
        setLoading(false);
        console.log({error});
      }
    }
  };
  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Sign Up"
        noBack
        rightText="Skip"
        rightAction={() => props.navigation.navigate('Home')}
      />
    ),
  });

  return (
    <ScrollView style={styles.container}>
      {!space ? <View style={styles.space1} /> : null}
      <Text style={styles.companyLogo}> ShopOnline </Text>
      <View style={styles.errorMessage}>
        {errorMessage ? (
          <Text style={styles.error}> {errorMessage} </Text>
        ) : null}
      </View>
      <View style={styles.emailWrap}>
        <View style={styles.emailIcon}>
          <SimpleLineIconsI name="user" size={25} color="#F14436" />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="User Name"
          onChangeText={value => setUsername(value)}
        />
      </View>
      <View style={styles.passwordWrap}>
        <View style={styles.emailIcon}>
          <SimpleLineIconsI name="envelope" size={25} color="#F14436" />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.passwordWrap}>
        <View style={[styles.emailIcon, {marginLeft: -3}]}>
          <MaterialCommunityIconsI
            name="cellphone-iphone"
            size={26}
            color="#F18999"
          />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Mobile Number"
          onChangeText={value => setMobile(value)}
        />
      </View>
      <View style={[styles.passwordWrap, {marginBottom: 20}]}>
        <View style={styles.passwordIcon}>
          <EvilIconsI name="lock" size={45} color="#F14436" />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={value => setPassword(value)}
          onFocus={() => setSpace(true)}
          onSubmitEditing={() => setSpace(false)}
        />
      </View>
      {!loading ? (
        <Button title="REGISTER" onPress={onSubmit} style={{borderRadius: 5}} />
      ) : (
        <Button loading />
      )}
      <Text style={styles.or}>Or SignUp with social account?</Text>
      <View style={styles.flex}>
        <SocialButton google />
        <SocialButton facebook />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
  space1: {
    height: 15,
  },
  companyLogo: {
    marginTop: 16,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    fontSize: 15,
    color: '#161F3D',
    borderColor: '#FABBB5',
    borderBottomWidth: 2,
    width: 300,
  },
  emailWrap: {
    height: 43,
    flexDirection: 'row',
    borderRadius: 4,
  },
  emailIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
    marginBottom: -12,
  },
  passwordWrap: {
    height: 43,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 4,
  },
  passwordIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    marginBottom: -5,
  },
  or: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
