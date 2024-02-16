import React, {useCallback, useContext, useState} from 'react';
import {useQuery} from '@apollo/client';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {gql} from '../../gql/gql';
import {Card} from '../Card/Card';
import {FilterContext} from '../../context/FilterContext';

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

export const CardList = () => {
  const {filter} = useContext(FilterContext);
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const navigation = useNavigation();

  const {data, refetch, fetchMore} = useQuery(AllCharacters, {
    variables: {filter},
    //onCompleted: data => data,
    fetchPolicy: 'cache-and-network',
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [refetch]);

  const fetchMoreData = () => {
    setRefreshing(true);
    fetchMore({
      variables: {page: page + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) return prev;
        return {
          characters: {
            results: [
              ...prev.characters?.results!,
              ...fetchMoreResult.characters?.results!,
            ],
          },
        };
      },
    });
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
          data={data?.characters?.results}
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
