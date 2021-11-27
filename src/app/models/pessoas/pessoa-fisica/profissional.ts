import { SEXO, STATUS_OBJETO } from 'src/app/constants';
import { PessoaFisica } from './pessoa-fisica';

export class Profissional extends PessoaFisica {
  constructor(
    username: string,
    nome: string,
    docFiscal: string,
    foneUm: string,
    endLogradouro: string,
    endNumero: string,
    endBairro: string,
    endCidade: string,
    endEstado: string,
    endPais: string = 'BRASIL',
    dataDeNascimento: Date = new Date(),
    sexo: SEXO,
    status: STATUS_OBJETO = STATUS_OBJETO.ATIVO
  ) {
    super(
      username,
      nome,
      docFiscal,
      foneUm,
      endLogradouro,
      endNumero,
      endBairro,
      endCidade,
      endEstado,
      endPais,
      dataDeNascimento,
      sexo,
      status
    );
  }
}
