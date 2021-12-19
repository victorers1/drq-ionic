import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { split, ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';

const basic = setContext((operation, context) => ({
  headers: {
    Accept: 'charset=utf-8',
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      'Tu55hiAjKee20Ipljj1jWEqmn4lTkzqXZ7yPUU2eUkoL3XhLjvMSQzCIr3QdEEgx',
  },
}));

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
  ],
  providers: [
    // Client Setup: https://apollo-angular.com/docs/data/subscriptions#client-setup
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
