import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CharacterScreen} from '../screens/CharacterScreen';
import {LocationScreen} from '../screens/LocationScreen';
import {EpisodeScreen} from '../screens/EpisodeScreen';
import {
  CharacterIconActive,
  CharacterIconInactive,
} from '../icons/characterIcons';
import {LocationIconActive, LocationIconInactive} from '../icons/locationIcons';
import {EpisodeIconActive, EpisodeIconInactive} from '../icons/episodeIcons';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarInactiveTintColor: '#A3A3A3',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <CharacterIconActive color={color} />
            ) : (
              <CharacterIconInactive color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <LocationIconActive color={color} />
            ) : (
              <LocationIconInactive color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <EpisodeIconActive color={color} />
            ) : (
              <EpisodeIconInactive color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
