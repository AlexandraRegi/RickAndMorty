import React from 'react';
import {Text} from 'react-native';

import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
} from './Card.styles';

export interface Character {
  __typename?: 'Character' | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | null | undefined;
  image?: string | null | undefined;
}

export const Card = (item: Character) => {
  return (
    <CharacterCard>
      <CharacterImage source={{uri: item?.image!}} />
      <CharacterInfo>
        <Text>{item?.status}</Text>
        <CharacterName>{item?.name}</CharacterName>
      </CharacterInfo>
    </CharacterCard>
  );
};
