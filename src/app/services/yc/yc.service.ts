import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

export enum YC_ACTION {
  CREATE = 0,
  READ = 1,
  UPDATE = 2,
  DELETE = 3,
}

export enum ClassUID {
  PESSOA_FISICA = 'pessoafisica',
  PESSOA_JURIDICA = 'pessoajuridica',
  DADOS_DE_PROFISSAO = 'dadosdeprofissao',
  EXPEDIENTE_DE_PESSOA_FISICA = 'expedientedepessoafisica',
  PROFISSAO = 'profissao',
  ESPECIALIDADE = 'especialidade',
}

export interface YCOptions {
  action: YC_ACTION;
  object: {};
  criterion?: {};
  associations?: {};
}

@Injectable({
  providedIn: 'root',
})
export class YCodifyService {
  private readonly url = 'http://baas.ycodify.com/api/interpreters-grid/s';
  private readonly APP_ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyIjoiV3lKN1hDSnZkMjVsY2x3aU9sd2lkbWxqZEc5eVpYSnpYQ0lzWENKelkyaGxiV0ZjSWpwY0ltUnljVndpTEZ3aWJtRnRaVndpT2x3aVVrOU1SVjlCUkUxSlRsd2lmU0pkIiwidXNlcl9uYW1lIjoidmljdG9yZXJzQGRycSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJuYW1lIjoiYXBwbGljYXRpb24gYWRtaW4gYWNjb3VudCIsImV4cCI6MTY0MzE2MTYyNiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJlYmNjNDFjNC1iYTAwLTQzOTMtYTMwMS03ZjY2ZmJjYjk0NzIiLCJlbWFpbCI6bnVsbCwiY2xpZW50X2lkIjoiZnJvbnRlbmQiLCJ1c2VybmFtZSI6InZpY3RvcmVyc0BkcnEiLCJzdGF0dXMiOjF9.Wn5568Hxh21ZxS-mt7UFQB3R-ZYKoUPNMwsPyCVdEjc';
  private readonly httpOptions = {
    headers: {
      'Content-Type': 'application/json' as const,
      'X-TenantID': 'victorers@drq',
      Authorization: `Bearer ${this.APP_ACCESS_TOKEN}`,
    },
  };

  constructor(private http: HttpClient, private loading: LoadingService) {}

  async request<T>(options: YCOptions): Promise<T> {
    const loading = await this.loading.carregando();
    loading.present();
    const result = await this.http
      .post<T>(this.url, options, this.httpOptions)
      .pipe(tap(console.log), first())
      .toPromise();
    loading.dismiss();

    return result;
  }
}
