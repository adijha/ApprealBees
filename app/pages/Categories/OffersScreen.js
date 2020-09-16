import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ShopCard from '../../components/ShopCard';
import Card from '../../components/Card';
import StoryCard from '../../components/StoryCard';
import BestSeller from '../../components/BestSeller';
import TagCard from '../../components/TagCard';
import GenderCard from '../../components/GenderCard';
import SaleCard from '../../components/SaleCard';
const horizontalMargin = 100;
const slideWidth = 220;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
const OffersScreen = () => {
  const [carouselItem, setCarouselItem] = useState([
    {
      title: 'Item 1',
      text: 'pen',
    },
    {
      title: 'Item 2',
      text: 'radio',
    },
    {
      title: 'Item 3',
      text: 'cup',
    },
    {
      title: 'Item 4',
      text: 'pen',
    },
    {
      title: 'Item 5',
      text: 'paper',
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  function _renderItem({item, index}) {
    return <Card img={`https://source.unsplash.com/weekly?${item.text}`} />;
  }
  return (
    <ScrollView style={styles.container}>
      <Carousel
        data={carouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={itemWidth}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
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
      <BestSeller title="BEST SELLER" />
      <GenderCard
        align="left"
        text="NEW ARRIVAlS"
        title="WOMEN'S"
        btnName="SHOP NOW"
        img="http://frontend.big-skins.com/goodwin-html-demo/images/home-fashion/banner-2.jpg"
      />
      <GenderCard
        align="right"
        text="NEW ARRIVAlS"
        title="MEN'S"
        btnName="SHOP NOW"
        img="http://frontend.big-skins.com/goodwin-html-demo/images/home-fashion/banner-1.jpg"
      />
      <SaleCard
        subTitle="50% OR MORE OFF"
        onPress=""
        title="CIBER SALE"
        btn="SHOP NOW"
        text="ON SUMMER COLLECTION"
      />
      <View style={{height: 10}} />
    </ScrollView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingBottom: 20,
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
    // other styles for the inner container
  },
});
