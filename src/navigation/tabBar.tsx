import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CharacterScreen from '../screens/CharacterScreen';
import LocationScreen from '../screens/LocationScreen';
import EpisodeScreen from '../screens/EpisodeScreen';

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarInactiveTintColor: '#A3A3A3',
      }}>
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/1.png')
                  : require('../assets/2.png')
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/3.png')
                  : require('../assets/4.png')
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/5.png')
                  : require('../assets/6.png')
              }
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
