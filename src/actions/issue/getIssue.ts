import { gql } from '@apollo/client'

export const GET_ISSUE = gql`
  query issue($issueId: ID, $keyNumber: String) {
    issue(issueId: $issueId, keyNumber: $keyNumber) {
      id
      title
      description
      genre
      status
      priority
      assignee {
        id
      }
      estimate
      comments {
        id
        content
        createdAt
        account {
          id
          name
          avatar
        }
      }
    }
  }`;
