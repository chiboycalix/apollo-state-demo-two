import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GET_RATES } from './example/queries/queries';
import { exampleState } from './localstate/example';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          local: {
            read() {
              return exampleState();
            }
          }
        }
      }
    }
  })
});

client
  .query({
    query: GET_RATES
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
