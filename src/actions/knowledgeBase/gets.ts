import { gql } from '@apollo/client'

export const GET_KNOWLEDGE_BASES = gql`
  query ($projectId: ID!) {
    project(projectId: $projectId) {
      defaultKnowledgeBase {
        id
        title
        description
        documents {
          id
          title
        }
      }
    }
  }
`;
