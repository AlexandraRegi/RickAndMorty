import React from 'react';
import {Text} from 'react-native';

import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
} from './Card.styles';
import {useNavigation} from '../../hooks/useNavigation';

export interface Character {
  __typename?: 'Character' | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | null | undefined;
  image?: string | null | undefined;
}

export const Card = (item: Character) => {
  const navigation = useNavigation();

  return (
    <CharacterCard
      onPress={() =>
        navigation.navigate('CharacterDetailScreen', {
          id: item?.id,
        })
      }>
      <CharacterImage source={{uri: item?.image!}} />
      <CharacterInfo>
        <Text>{item?.status}</Text>
        <CharacterName>{item?.name}</CharacterName>
      </CharacterInfo>
    </CharacterCard>
  );
};
