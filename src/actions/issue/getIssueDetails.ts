import { gql } from '@apollo/client'

export const GET_ISSUE_DETAILS = gql`
  query issue($keyNumber: String) {
    issue(keyNumber: $keyNumber) {
      assignee {
        name
        avatar
      }
      author {
        name
        avatar
      }
      priority
      estimate
      genre
    }
  }`;
