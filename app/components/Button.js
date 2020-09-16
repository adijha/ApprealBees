import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../assets/colors';

const Button = ({title, style, onPress, outline, loading}) => {
  return (
    <TouchableOpacity
      onPress={loading ? null : onPress}
      style={[
        styles.buttonWrap,
        {
          backgroundColor: outline ? '#fff' : COLORS.primary,
          borderWidth: outline ? 1 : 0,
          width: loading ? 49 : 260,
          borderRadius: loading ? 50 : 2,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text
          style={[styles.title, {color: outline ? COLORS.primary : '#ffffff'}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: COLORS.primary,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#999999',
  },
  title: {
    fontSize: 17,
    color: '#ffffff',
  },
});
