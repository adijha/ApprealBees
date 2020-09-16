import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ShopCard from '../../components/ShopCard';
import StoryCard from '../../components/StoryCard';
import BestSeller from '../../components/BestSeller';
import TagCard from '../../components/TagCard';
const OffersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TagCard
        icon="tag"
        title="Offers only for you"
        text="We have selected some products only for you"
      />
      <ShopCard
        img="https://source.unsplash.com/weekly?mobile"
        title="New Arrival"
        text="Summer's 16 Collection"
        btn="Shop Now"
      />
      <StoryCard
        img1="https://source.unsplash.com/weekly?electronics"
        img2="https://source.unsplash.com/weekly?home"
        img3="https://source.unsplash.com/weekly?kid"
        img4="https://source.unsplash.com/weekly?fashion"
        text1="Electronics"
        text2="Home"
        text3="Kids"
        text4="Fashion"
      />
      <BestSeller title="BEST SELLER" />
    </ScrollView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
  },
});
