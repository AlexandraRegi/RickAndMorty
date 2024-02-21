import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {QueryCharacterArgs, useCharacterQuery} from '../../gql/graphql';
import {useNavigation} from '../../hooks/useNavigation';
import {BackIcon} from '../../icons/back';

import {
  BackText,
  ButtonBack,
  DetailCardHeader,
  PersonalInfoImage,
  NameCharacterHeader,
  PersonalInfo,
  PersonalInfoStatus,
  PersonalInfoName,
  PersonalInfoSpecies,
  PersonalInfoTitle,
  InfoSection,
  Characteristic,
  CharacteristicName,
  CharacteristicValues,
  EpisodesDate,
  Episodes,
  PersonalBackgroundImage,
} from './DetailCard.styles';

export const DetailCard = ({id}: QueryCharacterArgs) => {
  const navigation = useNavigation();

  const {data} = useCharacterQuery({
    variables: {id: id},
  });
  const dataCharacter = data?.character;

  console.log(dataCharacter);

  return (
    <ScrollView>
      <DetailCardHeader>
        <ButtonBack onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <BackIcon />
          <BackText>{'Back'}</BackText>
        </ButtonBack>
        <NameCharacterHeader>{dataCharacter?.name}</NameCharacterHeader>
      </DetailCardHeader>
      <PersonalInfo>
        <PersonalBackgroundImage
          source={require('../../assets/HeaderImage.png')}
          resizeMode="cover">
          <PersonalInfoImage source={{uri: dataCharacter?.image!}} />
          <PersonalInfoStatus>{dataCharacter?.status}</PersonalInfoStatus>
          <PersonalInfoName>{dataCharacter?.name}</PersonalInfoName>
          <PersonalInfoSpecies>{dataCharacter?.species}</PersonalInfoSpecies>
        </PersonalBackgroundImage>
      </PersonalInfo>
      <PersonalInfoTitle>Informations</PersonalInfoTitle>
      <InfoSection>
        <Characteristic>
          <CharacteristicName>Gender</CharacteristicName>
          <CharacteristicValues>{dataCharacter?.gender}</CharacteristicValues>
        </Characteristic>
        <Characteristic>
          <CharacteristicName>Origin</CharacteristicName>
          <CharacteristicValues>
            {dataCharacter?.origin?.name}
          </CharacteristicValues>
        </Characteristic>
        <Characteristic>
          <CharacteristicName>Type</CharacteristicName>
          {dataCharacter?.type?.length === 0 ? (
            <CharacteristicValues>Unknown</CharacteristicValues>
          ) : (
            <CharacteristicValues>{dataCharacter?.type}</CharacteristicValues>
          )}
        </Characteristic>
        <Characteristic>
          <CharacteristicName>Location</CharacteristicName>
          <CharacteristicValues>
            {dataCharacter?.location?.name}
          </CharacteristicValues>
        </Characteristic>
      </InfoSection>
      <PersonalInfoTitle>Episodes</PersonalInfoTitle>
      <InfoSection>
        <FlatList
          data={dataCharacter?.episode}
          renderItem={({item}) => (
            <Episodes>
              <CharacteristicName>{item?.episode}</CharacteristicName>
              <CharacteristicValues>{item?.name}</CharacteristicValues>
              <EpisodesDate>{item?.air_date}</EpisodesDate>
            </Episodes>
          )}
          keyExtractor={item => item?.id!}
          scrollEnabled={false}
        />
      </InfoSection>
    </ScrollView>
  );
};
