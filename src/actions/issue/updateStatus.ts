import { gql } from '@apollo/client'


export const UPDATE_STATUS = gql`
  mutation UpdateIssue($input: UpdateIssueInput!) {
    updateIssue(input: $input) {
      issue {
        id
        status
      }
      errors {
        attribute
        message
      }
    }
  }`;