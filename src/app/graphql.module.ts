import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink, split } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const uri = 'drq-clinic.hasura.app/v1/graphql';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
      'content-type': 'application/json',
      'x-hasura-admin-secret':
        'Tu55hiAjKee20Ipljj1jWEqmn4lTkzqXZ7yPUU2eUkoL3XhLjvMSQzCIr3QdEEgx',
    },
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
    }
  });

  const http = ApolloLink.from([
    basic,
    auth,
    httpLink.create({ uri: `https://${uri}` }),
  ]);

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: `wss://${uri}`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Accept: 'charset=utf-8',
          'content-type': 'application/json',
          'x-hasura-admin-secret':
            'Tu55hiAjKee20Ipljj1jWEqmn4lTkzqXZ7yPUU2eUkoL3XhLjvMSQzCIr3QdEEgx',
        },
      },
    },
  });

  interface Definintion {
    kind: string;
    operation?: string;
  }

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: Definintion = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http
  );

  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
