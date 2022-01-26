import { Profissao } from './profissao';

export class Especialidade {
  constructor(
    public id: number,
    public nome: string,
    public profissao?: Profissao
  ) {}
}
