import { Injectable } from '@angular/core';
import {
  WatchQueryOptions,
  MutationOptions,
  FetchResult,
  SubscriptionOptions,
} from '@apollo/client/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo, private loadService: LoadingService) {}

  async query<TData>(
    options: WatchQueryOptions
  ): Promise<ApolloQueryResult<TData>> {
    let loading = await this.loadService.carregando();
    loading.present();

    const result: ApolloQueryResult<TData> = await this.apollo
      .watchQuery<TData>(options)
      .valueChanges.pipe(first())
      .toPromise();

    loading.dismiss();
    return result;
  }

  async mutate<TData>(options: MutationOptions): Promise<FetchResult<TData>> {
    let loading = await this.loadService.carregando();
    loading.present();
    const result = await this.apollo.mutate<TData>(options).toPromise();
    loading.dismiss();
    return result;
  }

  subscribe<TData>(
    options: SubscriptionOptions,
    next?: (
      value: FetchResult<TData, Record<string, any>, Record<string, any>>
    ) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    return this.apollo
      .subscribe<TData>(options)
      .subscribe(next, error, complete);
  }
}
