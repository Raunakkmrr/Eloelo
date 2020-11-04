import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Card from './Common/card';

const Cards = () => {
  return (
    <View style={styles.container}>
      <Card
        author={'Raunak Kumar'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/1.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Uplift and Contour your face with just a lipstick!'}
      />
      <Card
        author={'Gurleen Kaur'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/2.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Sleepless and dark circles? I have the hack just for you'}
      />
      <Card
        author={'Raunak Kumar'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/3.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Uplift and Contour your face with just a lipstick!'}
      />
      <Card
        author={'Gurleen Kaur'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/4.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Sleepless and dark circles? I have the hack just for you'}
      />
      <Card
        author={'Raunak Kumar'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/5.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Uplift and Contour your face with just a lipstick!'}
      />
      <Card
        author={'Gurleen Kaur'}
        image={require('../Images/img.jpeg')}
        img1={require('../Images/1.jpg')}
        img2={require('../Images/whatsapp.png')}
        about={'Sleepless and dark circles? I have the hack just for you'}
      />
    </View>
  );
};
export default Cards;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

    flexWrap: 'wrap',
  },
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
});
