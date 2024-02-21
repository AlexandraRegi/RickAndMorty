import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CardList} from '../components/CardList/CardList';

export const CharacterScreen = () => {
  return (
    <SafeAreaView>
      <CardList />
    </SafeAreaView>
  );
};
