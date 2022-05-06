import { gql } from '@apollo/client'

export const GET_BUCKETS = gql`
  query ($projectId: ID!) {
    project(projectId: $projectId) {
      buckets {
        id
        name
        isRelease
        sprint {
          id
          name
          version
        }
        issues {
          id
          title
          keyNumber
          status
          genre
          priority
          assignee {
            name
            avatar
          }
        }
      }
    }
  }`;
