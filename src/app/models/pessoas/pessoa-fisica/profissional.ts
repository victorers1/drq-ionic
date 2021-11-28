import { PessoaFisica } from './pessoa-fisica';

export class Profissional extends PessoaFisica {
  constructor(id: number, username: string, nome: string, docFiscal: string) {
    super(id, username, nome, docFiscal);
  }
}
