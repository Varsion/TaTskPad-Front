import { gql } from '@apollo/client'

export const GET_ORGANIZATION = gql`
  query account {
    account {
      organizations {
        id
        name
        logoUrl
      }
    }
  }`;