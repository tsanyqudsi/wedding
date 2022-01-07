import { GraphQLClient } from 'graphql-request';
import { graphQLProxy } from '../store/app';

export const client = new GraphQLClient('http://192.168.1.27:4000/graphql', { headers: {} })

export const query = (query, variables) => {
  client.request(query, variables).then((x) => {console.log('aa'); graphQLProxy.data = x} ).catch((error)=> console.log(error))
}
