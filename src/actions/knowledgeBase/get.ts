import { gql } from '@apollo/client'

export const GET_KNOWLEDGE_BASE = gql`
  query ($id: ID!) {
    knowledgeBase(id: $id) {
      id
      name
      description
      archived
      documents {
        id
        title
      }
    }
  }
`;
