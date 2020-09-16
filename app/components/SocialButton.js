import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const SocialButton = ({google, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrap}>
      <View style={styles.icon}>
        <Icon
          name={google ? 'google-plus' : 'facebook-official'}
          size={26}
          color={google ? '#F14F4E' : '#39559E'}
        />
      </View>
      <View style={styles.social}>
        <Text style={styles.title}>{google ? 'Google' : 'Facebook'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonWrap: {
    height: 49,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#999999',
  },
  title: {
    fontSize: 17,
    color: '#666666',
  },
  social: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    borderRightColor: '#b3b6bd',
    borderRightWidth: 1,
  },
});
