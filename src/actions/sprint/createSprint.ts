import { gql } from '@apollo/client'

export const CREATE_SPRINT = gql`
  mutation CreateSprint($input: CreateSprintInput!) {
    createSprint(input: $input) {
      sprint{
        id
        name
        version
      }
      errors {
        attribute
        message
      }
    }
  }`;
