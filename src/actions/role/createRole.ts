import { gql } from '@apollo/client'

export const CREATE_ROLE = gql`
  mutation CreateRole($input: CreateRoleInput!) {
    createRole(input: $input) {
      role {
        id
        name
      }
      errors {
        attribute
        message
      }
    }
  }`;
