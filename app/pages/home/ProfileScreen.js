import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import {COLORS} from '../../assets/colors';
import FeatherI from 'react-native-vector-icons/Feather';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          route={this.props.route}
          navigation={this.props.navigation}
          title="My Account"
          rightIcon
          rightAction={() => this.props.navigation.navigate('CartDrawer')}
        />
        <ScrollView style={{marginBottom: 20}}>
          <View style={styles.header}>
            <Image
              style={styles.avatar}
              source={{uri: 'https://source.unsplash.com/weekly?man'}}
            />
            <Text style={styles.name}>John Kumar Doe</Text>
            <Text style={styles.info}>+917821915962</Text>
            <Text style={[styles.info, {marginBottom: 20}]}>usama@bin.com</Text>
          </View>

          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate('My Orders')}>
            <Text style={{fontSize: 18}}>My Orders</Text>
            <FeatherI name="chevron-right" size={25} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate('My Wishlist')}>
            <Text style={{fontSize: 18}}>My Wishlists</Text>
            <FeatherI name="chevron-right" size={25} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.props.navigation.navigate('Reviews');
            }}>
            <Text style={{fontSize: 18}}>My Reviews</Text>
            <FeatherI name="chevron-right" size={25} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate('Address')}>
            <Text style={{fontSize: 18}}>My Address</Text>
            <FeatherI name="chevron-right" size={25} color="#222" />
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 0.5,
              marginVertical: 10,
              borderColor: '#919191',
            }}
          />
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Text style={{fontSize: 18}}>Account Settings</Text>
            <FeatherI name="settings" size={25} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, {marginBottom: 60}]}>
            <Text style={{fontSize: 18}}>Log Out</Text>
            <FeatherI name="log-out" size={25} color="#222" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    // height: 260,
    // flex: 1,
    alignItems: 'center',
    // padding: 30,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    // position: 'absolute',
    marginTop: 20,
  },

  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  card: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 20,
    backgroundColor: '#fff',
    // marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    justifyContent: 'space-between',
  },
});
