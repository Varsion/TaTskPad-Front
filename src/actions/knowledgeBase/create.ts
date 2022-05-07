import { gql } from '@apollo/client'

export const CREATE_KNOWLEDGE_BASE = gql`
  mutation CreateKnowledgeBase($input: CreateKnowledgeBaseInput!) {
    createKnowledgeBase(input: $input) {
      knowledgeBase {
        id
        title
        description
      }
    }
  }
`;
