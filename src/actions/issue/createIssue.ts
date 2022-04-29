import { gql } from '@apollo/client'

export const CREATE_ISSUE = gql`
mutation CreateIssue($input: CreateIssueInput!) {
  createIssue(input: $input) {
    issue {
      id
      title
      description
      priority
      genre
      estimate
      project {
        id
      }
      author {
        id
      }
      customizeFields {
        name
        value
      }
    }
    errors {
      attribute
      message
    }
  }
}`;
