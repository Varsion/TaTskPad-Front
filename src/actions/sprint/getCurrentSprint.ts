import { gql } from '@apollo/client'

export const GET_CURRENT_SPRINT = gql`
  query ($projectId: ID!) {
    project(projectId: $projectId) {
      currentSprint {
        id
        name
        version
        issueList {
          issues {
            id
            title
            author {
              name
              avatar
            }
            assignee {
              name
              avatar
            }
            keyNumber
            status
            genre
            priority
          }
        }
      }
    }
  }`;
