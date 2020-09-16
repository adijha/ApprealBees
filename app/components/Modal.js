import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '../assets/colors';

const device = Dimensions.get('window');

export default ({show, onClose, children}) => {
  return (
    <Modal isVisible={show} onBackButtonPress={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Icon name="close" size={30} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.childContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: device.height * 0.9,
    backgroundColor: 'white',
  },
  childContainer: {
    marginTop: 40,
    padding: 10,
    paddingBottom: 40,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
  },
});
