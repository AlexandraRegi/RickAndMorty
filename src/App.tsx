import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import RootNavigation from './navigation/root';
import {PageProvider} from './context/PageContext';
import {FilterProvider} from './context/FilterContext';
import {DataCharacterProvider} from './context/DataCharacterContext';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <DataCharacterProvider>
        <PageProvider>
          <FilterProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </FilterProvider>
        </PageProvider>
      </DataCharacterProvider>
    </ApolloProvider>
  );
};

export default App;
