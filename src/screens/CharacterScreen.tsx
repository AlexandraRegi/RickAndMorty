import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import CardList from '../components/CardList/CardList';

const CharacterScreen = () => {
  return (
    <SafeAreaView>
      <CardList />
    </SafeAreaView>
  );
};

export default CharacterScreen;
