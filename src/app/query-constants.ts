import { gql } from 'apollo-angular';

/// PROFISSIONAL HOME
export interface IProfissionalHome {
  username: string;
  nome: string;
  docFiscal: string;
}
export interface IResponse {
  PessoaFisica: IProfissionalHome[];
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
