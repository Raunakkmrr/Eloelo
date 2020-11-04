import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Categories = ({imageName, title}) => {
  console.log(imageName);
  return (
    <View style={styles.categories__view}>
      <Image style={styles.categories__image} source={imageName} />
      <Text style={styles.categories__button}>{title}</Text>
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  Categories: {
    height: 20,
  },
  categories__view: {
    borderBottomWidth: 0.8,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    borderColor: 'purple',
  },
  categories__button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontWeight: '500',
    paddingLeft: 4,
  },
  categories__image: {
    height: 18,
    width: 18,
    tintColor: 'purple',
  },
});
