import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory"; // eslint-disable-line

import Routes from './routes';
import baseStyles from './styles/index';
import registerServiceWorker from './registerServiceWorker';

const httpLink = createHttpLink({ uri: 'http://localhost:8000/graphql' });
const middlewareLink = setContext(() => ({
  headers: {
    'x-token': localStorage.getItem('token'),
    'x-refresh-token': localStorage.getItem('refreshToken'),
  },
}));

const afterwareLink = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext();

  if (headers) {
    const token = headers.get('x-token');
    const refreshToken = headers.get('x-refresh-token');

    if (token) {
      localStorage.setItem('token', token);
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }
  }

  return forward(operation);
});

const link = afterwareLink.concat(middlewareLink.concat(httpLink));
const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id,
  }),
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

const render = () => {
  baseStyles();
  ReactDOM.render(App, document.getElementById('root'));
};

render();
registerServiceWorker();
