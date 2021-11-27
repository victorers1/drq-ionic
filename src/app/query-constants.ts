import { gql } from 'apollo-angular';

export const PROFISSIONAL_HOME_QUERY = gql`
  query MyQuery($id: bigint!) {
    PessoaFisica(where: { id: { _eq: $id } }) {
      username
      nome
      docFiscal
      email
      sexo
      rg
      foneUm
      endLogradouro
      endNumero
      endBairro
      endCidade
      endEstado
      endPais
      endCEP
      dataDeNascimento
    }
  }
`;
