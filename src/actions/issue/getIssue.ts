import { gql } from '@apollo/client'

export const GET_ISSUE = gql`
  query issue($issueId: ID, $keyNumber: String) {
    issue(issueId: $issueId, keyNumber: $keyNumber) {
      id
      title
      description
      genre
      priority
      author {
        id
        name
        avatar
      }
      assignee {
        id
        name
        avatar
      }
      customizeFields {
        name
        value
      }
    }
  }`;
