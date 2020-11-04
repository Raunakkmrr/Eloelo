import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Cards from './Cards';
import Categories from './Common/categories';

const Home = () => {
  return (
    <SafeAreaView style={{}}>
      {/* Header */}
      <View style={styles.Header}>
        <Image
          source={require('../Images/Menu.png')}
          style={{height: 30, width: 30, marginLeft: 6, tintColor: 'purple'}}
        />
        <View style={{flex: 1}}>
          <Image source={require(`../Images/eloelo.png`)} style={styles.logo} />
        </View>
        <Image source={require(`../Images/Search.png`)} style={styles.search} />
        <Image source={require(`../Images/e.png`)} style={styles.profileIcon} />
      </View>
      {/* Categories */}
      <View style={{height: '5%'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.Categories}>
          <Categories
            imageName={require('../Images/star.png')}
            title={'Popular'}
          />
          <Categories
            imageName={require('../Images/lipstick.png')}
            title={'Beauty'}
          />
          <Categories
            imageName={require('../Images/pen.png')}
            title={'Reviews'}
          />
          <Categories
            imageName={require('../Images/dumbell.png')}
            title={'Health Wellness'}
          />
          <Categories
            imageName={require('../Images/dress.png')}
            title={'Fashion'}
          />
        </ScrollView>
      </View>
      {/* Cards */}
      <ScrollView style={{height: '88%'}}>
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: '6%',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    display: 'flex',
    marginLeft: 10,
    height: 25,
    width: 75,
  },
  search: {
    height: 25,
    width: 25,
    tintColor: 'grey',
  },
  profileIcon: {
    height: 25,
    width: 25,
    tintColor: '#AE9252',
    marginLeft: 22,
    marginRight: 12,
  },
});

export default Home;
