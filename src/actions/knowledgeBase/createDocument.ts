import { gql } from '@apollo/client'

export const CREATE_DOCUMENT = gql`
  mutation CreateDocument($input: CreateDocumentInput!) {
    createDocument(input: $input) {
      document {
        title
        content
      }
    }
  }
`;
