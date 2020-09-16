import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../assets/colors';
import Modal from '../../components/Modal';

const SettingsScreen = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('usama@bin.com');
  const [name, setName] = useState('John Kumar Doe');
  const [mobile, setMobile] = useState('7821915962');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    checkLogin();
  });
  const checkLogin = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  };

  return (
    <ScrollView>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Settings"
      />

      <Modal show={show} onClose={() => setShow(false)}>
        <Text
          style={{fontSize: 18, alignSelf: 'center', color: COLORS.primary}}>
          Change Password
        </Text>

        <Text
          style={[
            styles.text,
            {
              marginBottom: -5,
            },
          ]}>
          Current Password
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={value => setOldPassword(value)}
          value={oldPassword}
        />
        <Text
          style={[
            styles.text,
            {
              marginBottom: -5,
            },
          ]}>
          Current Password
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={value => setNewPassword(value)}
          value={newPassword}
        />
        <Text
          style={[
            styles.text,
            {
              marginBottom: -5,
            },
          ]}>
          Confirm New Password
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={value => setConfirmPassword(value)}
          value={confirmPassword}
        />
        <Button
          title="Update Password"
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
      {errorMessage ? (
        <Text
          style={[
            styles.text,
            {
              color: 'red',
            },
          ]}>
          {errorMessage}
        </Text>
      ) : null}
      <Text
        style={[
          styles.text,
          {
            marginBottom: -5,
          },
        ]}>
        Full Name
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <Text
        style={[
          styles.text,
          {
            marginBottom: -5,
          },
        ]}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <Text
        style={[
          styles.text,
          {
            marginBottom: -5,
          },
        ]}>
        Mobile Number
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Mobile Number"
        onChangeText={value => setMobile(value)}
        value={mobile}
      />
      <Button
        title="Update"
        style={{marginTop: 30}}
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            setErrorMessage('Error Message will look like this');
            setLoading(false);
          }, 2000);
        }}
        loading={loading}
      />
      {/* <Button
        title="Change Password"
        style={{marginTop: 50}}
        onPress={() => {
          console.log('change password');
        }}
      /> */}
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => setShow(true)}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Change Password
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    color: '#161F3D',
    borderColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 300,
    alignSelf: 'center',
  },
  text: {
    width: 291,
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 25,
  },
});
