import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Hr from './Hr';
import ProductCard from './ProductCard';

import {useNavigation} from '@react-navigation/native';
const Card = props => {
  const navigation = useNavigation();

  const [Products, setProducts] = useState([
    {
      title: 'Realme XT (6gb)',
      img: 'https://source.unsplash.com/weekly?app',
      img1: 'https://source.unsplash.com/weekly?phone',
      img2: 'https://source.unsplash.com/weekly?mobile',
      img3: 'https://source.unsplash.com/weekly?android',
      price: '10000',
      basePrice: '20000',
      discount: '50%',
      rating: '4.3',
      ratings: '43',
      reviews: '7',
      availablity: 'In stock',
      color: 'green',
      size: '32',
      description: [
        'Sleeve Type: Half',
        'Material: Cotton',
        'Pattern: Striped',
      ],
      customerReviews: [
        {
          name: 'Jonny',
          date: '23 may 2020',
          rating: '5',
          message: 'I love this product',
        },
        {
          name: 'Mahadev',
          date: '23 june 2020',
          rating: '5',
          message: "Yo, It's lit",
        },
        {
          name: 'Adam',
          date: '24 may 2020',
          rating: '2',
          message: 'I love this thing',
        },
      ],
    },
    {
      title: 'Pink Shirt',
      img: 'https://source.unsplash.com/weekly?pink%20girl',
      img1: 'https://source.unsplash.com/weekly?pink%20baby',
      img2: 'https://source.unsplash.com/weekly?pink%20child',
      img3: 'https://source.unsplash.com/weekly?pink%20lady',
      price: '10000',
      basePrice: '20000',
      discount: '50%',
      rating: '4.3',
      ratings: '43',
      reviews: '7',
      availablity: 'In stock',
      color: 'green',
      size: '32',
      description: [
        'Sleeve Type: Half',
        'Material: Cotton',
        'Pattern: Striped',
      ],
      customerReviews: [
        {
          name: 'Jonny',
          date: '23 may 2020',
          rating: '5',
          message: 'I love this product',
        },
        {
          name: 'Mahadev',
          date: '23 june 2020',
          rating: '5',
          message: "Yo, It's lit",
        },
        {
          name: 'Adam',
          date: '24 may 2020',
          rating: '2',
          message: 'I love this thing',
        },
      ],
    },
    {
      title: 'Canon Hammer',
      img: 'https://source.unsplash.com/weekly?hammer',
      img1: 'https://source.unsplash.com/weekly?wood',
      img2: 'https://source.unsplash.com/weekly?pin',
      img3: 'https://source.unsplash.com/weekly?axe',
      price:20000,
      basePrice: '40000',
      discount: '50%',
      rating: '4.3',
      ratings: '43',
      reviews: '7',
      availablity: 'In stock',
      color: 'green',
      size: '32',
      description: [
        'Sleeve Type: Half',
        'Material: Cotton',
        'Pattern: Striped',
      ],
      customerReviews: [
        {
          name: 'Jonny',
          date: '23 may 2020',
          rating: '5',
          message: 'I love this product',
        },
        {
          name: 'Mahadev',
          date: '23 june 2020',
          rating: '5',
          message: "Yo, It's lit",
        },
        {
          name: 'Adam',
          date: '24 may 2020',
          rating: '2',
          message: 'I love this thing',
        },
      ],
    },
    {
      title: 'Mi trimmer',
      img: 'https://source.unsplash.com/weekly?red%20shirt',
      img1: 'https://source.unsplash.com/weekly?red%20vest',
      img2: 'https://source.unsplash.com/weekly?red%20wear',
      img3: 'https://source.unsplash.com/weekly?red%20dress',
      price: '10000',
      basePrice: '20000',
      discount: '50%',
      rating: '4.3',
      ratings: '43',
      reviews: '7',
      availablity: 'In stock',
      color: 'green',
      size: '32',
      description: [
        'Sleeve Type: Half',
        'Material: Cotton',
        'Pattern: Striped',
      ],
      customerReviews: [
        {
          name: 'Jonny',
          date: '23 may 2020',
          rating: '5',
          message: 'I love this product',
        },
        {
          name: 'Mahadev',
          date: '23 june 2020',
          rating: '5',
          message: "Yo, It's lit",
        },
        {
          name: 'Adam',
          date: '24 may 2020',
          rating: '2',
          message: 'I love this thing',
        },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <Hr />
      <Text style={styles.title}>{props.title}</Text>
      <Hr />
      <View style={[styles.product, {marginTop: 10}]}>
        {Products
          ? Products.map(item => (
              <ProductCard
                img={item.img}
                text={item.title}
                key={item.title}
                price={item.price}
                onPress={() =>
                  navigation.push('Product', {
                    item,
                  })
                }
              />
            ))
          : null}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    marginTop: 10,
  },
  text: {
    paddingBottom: 15,
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  btn: {width: 100},
  product: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});
