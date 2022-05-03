import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo/ApolloClient";
import Router from './router/router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}


export default App;
