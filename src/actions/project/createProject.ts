import { gql } from '@apollo/client'

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        organization {
          id
          name
        }
        name
        status
        logoUrl
      }
      errors {
        attribute
        message
      }
    }
  }`;
