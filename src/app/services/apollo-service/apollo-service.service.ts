import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { WatchQueryOptions } from '@apollo/client/core/watchQueryOptions';
import { Apollo } from 'apollo-angular';
import { first } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo, private loadService: LoadingService) {}

  async query<T>(options: WatchQueryOptions) {
    let loading = await this.loadService.carregando();
    loading.present();
    const result: ApolloQueryResult<T> = await this.apollo
      .watchQuery<T>(options)
      .valueChanges.pipe(first())
      .toPromise();
    loading.dismiss();
    return result;
  }

  async mutation(options: WatchQueryOptions) {}
}
