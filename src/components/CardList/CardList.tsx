import React, {useCallback, useContext, useState} from 'react';
import {useQuery} from '@apollo/client';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {gql} from '../../gql/gql';
import Card from '../Card/Card';
import {PageContext} from '../../context/PageContext';
import {FilterContext} from '../../context/FilterContext';
import {DataCharacterContext} from '../../context/DataCharacterContext';

import {
  Header,
  Title,
  Filter,
  CharactersList,
  Container,
} from './CardList.styles';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const AllCharacters = gql(`
    query characters ($page: Int, $filter: FilterCharacter) {    
        characters (page: $page, filter:$filter) {
            results {
                name
                id
                status
                image
            }
        }
    }
`);

const CardList = () => {
  const {filter} = useContext(FilterContext);
  const {page, setPage} = useContext(PageContext);
  const {dataCharacter, setDataCharacter} = useContext(DataCharacterContext);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const navigation = useNavigation();

  useQuery(AllCharacters, {
    variables: {page, filter},
    onCompleted: data =>
      setDataCharacter([...dataCharacter, ...data?.characters?.results]),
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const fetchMoreData = () => {
    setRefreshing(true);
    setPage(page + 1);
    setRefreshing(false);
  };

  return (
    <Container>
      <Header>
        <Title>Character</Title>
        <TouchableOpacity
          onPress={() => navigation.navigate('FilterScreen' as never)}>
          <Filter>Filter</Filter>
        </TouchableOpacity>
      </Header>
      <CharactersList>
        <FlatList
          data={dataCharacter}
          numColumns={2}
          renderItem={({item}) => <Card {...item} />}
          keyExtractor={item => item?.id!}
          scrollEnabled={true}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onEndReachedThreshold={1}
          onEndReached={fetchMoreData}
        />
      </CharactersList>
    </Container>
  );
};

export default CardList;
