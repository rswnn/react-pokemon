import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { PokemonProvider } from 'context';
import client from './client';

import Router from 'router';
import './App.css';

function App() {
  return (
    <ApolloProvider client={ client }>
      <PokemonProvider>
        <Router/>
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;
