import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import {COLORS} from '../../assets/colors';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
const stateList = [
  {
    name: 'Andaman and Nicobar Islands',
  },
  {
    name: 'Andhra Pradesh',
  },
  {
    name: 'Arunachal Pradesh',
  },
  {
    name: 'Assam',
  },
  {
    name: 'Bihar',
  },
  {
    name: 'Chandigarh',
  },
  {
    name: 'Chhattisgarh',
  },
  {
    name: 'Dadra and Nagar Haveli',
  },
  {
    name: 'Daman and Diu',
  },
  {
    name: 'Delhi',
  },
  {
    name: 'Goa',
  },
  {
    name: 'Gujarat',
  },
  {
    name: 'Haryana',
  },
  {
    name: 'Himachal Pradesh',
  },
  {
    name: 'Jammu and Kashmir',
  },
  {
    name: 'Jharkhand',
  },
  {
    name: 'Karnataka',
  },
  {
    name: 'Kerala',
  },
  {
    name: 'Ladakh',
  },
  {
    name: 'Lakshadweep',
  },
  {
    name: 'Madhya Pradesh',
  },
  {
    name: 'Maharashtra',
  },
  {
    name: 'Manipur',
  },
  {
    name: 'Meghalaya',
  },
  {
    name: 'Mizoram',
  },
  {
    name: 'Nagaland',
  },
  {
    name: 'Odisha',
  },
  {
    name: 'Puducherry',
  },
  {
    name: 'Punjab',
  },
  {
    name: 'Rajasthan',
  },
  {
    name: 'Sikkim',
  },
  {
    name: 'Tamil Nadu',
  },
  {
    name: 'Telangana',
  },
  {
    name: 'Tripura',
  },
  {
    name: 'Uttar Pradesh',
  },
  {
    name: 'Uttarakhand',
  },
  {
    name: 'West Bengal',
  },
];
const CartScreen = props => {
  const [addressType, setAddressType] = useState('new');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [country, setCountry] = useState('India');
  const [addresses, setAddresses] = useState([
    {
      name: 'Urjit Patel',
      line1: '1121 Blob, localhost UK',
      line2: 'Uttrakhand, India',
      index: 0,
    },
    {
      name: 'Raghuram Rajan',
      line1: '1121 Blob, localhost UK',
      line2: 'Uttrakhand, India',
      index: 1,
    },
    {
      name: 'Brajeh Patel',
      line1: '1121 Blob, localhost UK',
      line2: 'Uttrakhand, India',
      index: 2,
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderWidth: 0.8,
            margin: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: COLORS.primary,
            borderRadius: 4,
            marginHorizontal: 40,
          }}>
          <TouchableOpacity
            onPress={() => setAddressType('new')}
            style={{
              alignItems: 'center',
              // borderRightWidth: 1,
              padding: 10,
              flex: 1,
              backgroundColor: addressType == 'new' ? COLORS.primary : '#fff',
            }}>
            <Text
              style={{
                color: addressType == 'new' ? '#fff' : '#BEB7B8',
                fontSize: 15,
              }}>
              New address
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAddressType('old')}
            style={{
              alignItems: 'center',
              padding: 10,
              flex: 1,
              backgroundColor: addressType == 'old' ? COLORS.primary : '#fff',
            }}>
            <Text
              style={{
                color: addressType == 'old' ? '#fff' : '#BEB7B8',
                fontSize: 15,
              }}>
              Saved address
            </Text>
          </TouchableOpacity>
        </View>

        {addressType === 'old' ? (
          addresses ? (
            addresses.map((addres, index) => (
              <TouchableOpacity
                style={{
                  borderBottomColor: '#F0f0f0',
                  borderBottomWidth: 1,
                  padding: 18,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setSelectedAddress(index);
                }}
                key={index}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 15,
                    borderColor: '#999',
                    borderWidth: 1,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 14,
                      backgroundColor:
                        selectedAddress === index ? COLORS.primary : '#fff',
                    }}
                  />
                </View>
                <View>
                  <Text style={{color: '#9B9B9B', fontSize: 16}}>
                    {addres.name}
                  </Text>
                  <Text style={{color: '#9B9B9B', fontSize: 16}}>
                    {addres.line1}
                  </Text>
                  <Text style={{color: '#9B9B9B', fontSize: 16}}>
                    {addres.line2}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : null
        ) : (
          <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
            <Text style={{color: 'grey'}}>Full Name</Text>
            <TextInput
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,

                marginBottom: 20,
              }}
              autoCapitalize="none"
              placeholder="Full Name"
              onChangeText={value => setName(value)}
            />
            <Text style={{color: 'grey'}}>Address</Text>
            <TextInput
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 20,
              }}
              autoCapitalize="none"
              placeholder="Address"
              onChangeText={value => setAddress(value)}
              multiline
              maxLength={200}
            />
            <Text style={{color: 'grey'}}>Phone Number</Text>
            <TextInput
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,

                marginBottom: 20,
              }}
              maxLength={10}
              autoCapitalize="none"
              placeholder="Phone Number"
              onChangeText={value => setPhone(value)}
              keyboardType={'numeric'}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{color: 'grey'}}>State</Text>
                <Picker
                  selectedValue={state}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) => setState(itemValue)}>
                  {stateList.map((e, index) => (
                    <Picker.Item label={e.name} value={e.name} key={index} />
                  ))}
                </Picker>
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: 'grey'}}>City</Text>
                <TextInput
                  style={{
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 20,
                  }}
                  autoCapitalize="none"
                  placeholder="City"
                  onChangeText={value => setPhone(value)}
                />
              </View>
            </View>
            <Text style={{color: 'grey'}}>Pin Code</Text>
            <TextInput
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 20,
              }}
              autoCapitalize="none"
              placeholder="Pin Code"
              keyboardType={'numeric'}
              maxLength={8}
              onChangeText={value => setPinCode(value)}
              maxLength={200}
            />
            <Button style={{marginTop: 20}} title="Add this Address" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  btn: {
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
