import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({about, image, img1, img2, author}) => (
  <View style={styles.card}>
    <Image style={styles.card__image} source={img1} />
    <Text style={styles.card__text}>{about}</Text>
    <View style={styles.card__view}>
      <Image source={image} style={styles.card__profileImage} />
      <Text style={{fontWeight: '300', flex: 1}}>{author}</Text>
      <Image source={img2} style={{height: 20, width: 20, marginRight: 6}} />
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 350,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  card__image: {
    width: '100%',
    height: '78%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card__text: {marginHorizontal: 4, marginTop: 2, fontWeight: '600'},
  card__profileImage: {height: 25, width: 25, borderRadius: 15, margin: 5},
  card__view: {
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
});
