import { gql } from '@apollo/client'

export const GET_BUCKET_LIST = gql`
  query ($projectId: ID!) {
    project(projectId: $projectId) {
      buckets {
        id
        name
        sprint {
          isCurrent
        }
      }
    }
  }`;
