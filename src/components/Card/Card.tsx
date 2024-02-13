import React from 'react';
import {Text} from 'react-native';

import {ICharacter} from '../../context/DataCharacterContext';

import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
} from './Card.styles';

const Card = (item: ICharacter) => {
  return (
    <CharacterCard>
      <CharacterImage source={{uri: item?.image}} />
      <CharacterInfo>
        <Text>{item?.status}</Text>
        <CharacterName>{item?.name}</CharacterName>
      </CharacterInfo>
    </CharacterCard>
  );
};

export default Card;
