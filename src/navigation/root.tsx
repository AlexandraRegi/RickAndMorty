import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBar from './tabBar';
import FilterScreen from '../screens/FilterScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Group>
        <Stack.Screen name="TAB" component={TabBar} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigation;
