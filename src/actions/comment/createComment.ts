import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        content
      }
      errors {
        attribute
        message
      }
    }
  }`;