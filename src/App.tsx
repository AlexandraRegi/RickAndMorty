import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import {RootNavigation} from './navigation/root';
import {FilterProvider} from './context/FilterContext';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </FilterProvider>
    </ApolloProvider>
  );
};

export default App;
