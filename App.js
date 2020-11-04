import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Community from './Components/Community';
import Others from './Components/Others';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return (
                  <Image
                    source={require(`./Images/Home.png`)}
                    style={{height: 25, width: 25}}
                  />
                );
              } else if (route.name === 'Community') {
                return (
                  <Image
                    source={require(`./Images/chat.png`)}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? 'purple' : 'black',
                    }}
                  />
                );
              } else if (route.name === 'Others') {
                return (
                  <Image
                    source={require(`./Images/eloelo.png`)}
                    style={{
                      height: 15,
                      width: 45,
                      tintColor: focused ? 'purple' : 'black',
                    }}
                  />
                );
              }

              // You can return any component that you like here!
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Community" component={Community} />
          <Tab.Screen name="Others" component={Others} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
