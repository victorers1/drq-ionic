import { gql } from 'apollo-angular';

/// PROFISSIONAL HOME
export interface IPessoaFisicaHome {
  username: string;
  nome: string;
  docFiscal: string;
}
export interface IResponseProfissionalHome {
  PessoaFisica: IPessoaFisicaHome[];
}
export const PROFISSIONAL_HOME_QUERY = gql`
  query MyQuery($id: bigint!) {
    PessoaFisica(where: { id: { _eq: $id } }) {
      username
      nome
      docFiscal
    }
  }
`;

// CONFIG DADOS CONTA
export interface IConfigDados {
  pessoaFisica: IPessoaFisicaHome;
}

export interface IDadosProfissao {}
