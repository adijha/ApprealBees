import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import TagCard from '../../components/TagCard';
import BestSeller from '../../components/BestSeller';
const Screen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.name}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <ScrollView style={styles.container}>
        <TagCard
          icon="tag"
          title="Offers only for you"
          text="We have selected some products only for you"
        />
        <BestSeller title="Latest Product" />
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 7,
  },
});
