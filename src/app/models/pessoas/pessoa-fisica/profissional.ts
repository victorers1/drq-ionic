import { PessoaFisica } from './pessoa-fisica';

export class Profissional extends PessoaFisica {
  constructor(id: number, email: string, nome: string, docFiscal: string) {
    super(id, email, nome, docFiscal);
  }
}
