import React, {useCallback, useState} from 'react';
//import {useQuery} from '@apollo/client';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';
import {FlatList, TouchableOpacity} from 'react-native';

import {Card} from '../Card/Card';
import {useFilterContext} from '../../context/FilterContext';
import {useNavigation} from '../../hooks/useNavigation';
import {useCharactersQuery} from '../../gql/graphql';

import {Header, Title, Filter, Container} from './CardList.styles';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

export const CardList = () => {
  const {filter} = useFilterContext();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const {data, fetchMore, refetch} = useCharactersQuery({
    variables: {filter: filter},
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
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Filter>Filter</Filter>
        </TouchableOpacity>
      </Header>
      <FlatList
        data={data?.characters?.results}
        numColumns={2}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item?.id!}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={1}
        onEndReached={fetchMoreData}
      />
    </Container>
  );
};
