import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Card from '../../components/Card';
import BestSeller from '../../components/BestSeller';

import TagCard from '../../components/TagCard';
const OffersScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Card
        img="https://source.unsplash.com/weekly?laptop"
        title="New Arrival"
        text="Summer's 16 Collection"
        btn="Shop Now"
      />
      <BestSeller title="Latest Product" navigation={navigation} />
      <TagCard
        icon="tag"
        title="Offers only for you"
        text="We have selected some products only for you"
      />
    </ScrollView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
  },
});
