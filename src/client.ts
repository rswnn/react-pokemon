import {
  InMemoryCache, ApolloClient, HttpLink, ApolloLink
} from '@apollo/client';
import config from 'config';
    
const httpLink = new HttpLink({ uri: `${config.url}/graphql`, });
    
const middlewareLink = new ApolloLink((operation, forward) => {
  return forward(operation);
});
const client = new ApolloClient({
  link: ApolloLink.from([middlewareLink, httpLink]),
  cache: new InMemoryCache()
});
    
export default client;
