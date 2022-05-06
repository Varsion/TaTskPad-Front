import { gql } from '@apollo/client'

export const GET_ROLE = gql`
  query ($id: ID!) {
    role(id: $id) {
      name
      description
      permissions {
        scope
        actions {
          key
          value
        }
      }
    }
  }`;
