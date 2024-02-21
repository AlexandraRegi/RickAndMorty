import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Filter} from '../components/Filter/Filter';

export const FilterScreen = () => {
  return (
    <SafeAreaView>
      <Filter />
    </SafeAreaView>
  );
};
