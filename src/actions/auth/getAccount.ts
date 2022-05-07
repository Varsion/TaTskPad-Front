import { gql } from '@apollo/client'

export const GET_ACCOUNT = gql`
  query {
    account {
      id
      name
      email
      avatar
    }
  }  
`;
