import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyIjoiV3lKN1hDSnZkMjVsY2x3aU9sd2lkbWxqZEc5eVpYSnpYQ0lzWENKelkyaGxiV0ZjSWpwY0ltUnljVndpTEZ3aWJtRnRaVndpT2x3aVVrOU1SVjlCUkUxSlRsd2lmU0pkIiwidXNlcl9uYW1lIjoidmljdG9yZXJzQGRycSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJuYW1lIjoiYXBwbGljYXRpb24gYWRtaW4gYWNjb3VudCIsImV4cCI6MTY0Mjk5MDMxMiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiIzYTEwYWRhMC1mZWZiLTRhMjQtYjM0MS03NDkyMDI1MTA3YWEiLCJlbWFpbCI6bnVsbCwiY2xpZW50X2lkIjoiZnJvbnRlbmQiLCJ1c2VybmFtZSI6InZpY3RvcmVyc0BkcnEiLCJzdGF0dXMiOjF9.HVq77XrwT8YomK9m1r_5BCa0iJq6dy14z4a8RduE7hI';
  private readonly httpOptions = {
    headers: {
      'Content-Type': 'application/json' as const,
      'X-TenantID': 'victorers@drq',
      Authorization: `Bearer ${this.APP_ACCESS_TOKEN}`,
    },
  };

  constructor(private http: HttpClient) {}

  async request<T>(options: YCOptions): Promise<T> {
    return await this.http
      .post<T>(this.url, options, this.httpOptions)
      .pipe(tap(console.log), first())
      .toPromise();
  }
}
