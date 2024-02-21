import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {DetailCard} from '../components/DetailCard/DetailCard';
import {QueryCharacterArgs} from '../gql/graphql';

type NewsScreenProp = RouteProp<{id: QueryCharacterArgs}, 'id'>;

export const CharacterDetailScreen = () => {
  const {
    params: {id},
  } = useRoute<NewsScreenProp>();

  return (
    <SafeAreaView>
      <DetailCard id={id} />
    </SafeAreaView>
  );
};
