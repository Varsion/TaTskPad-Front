import { gql } from '@apollo/client'

export const DELETE_COMMENT = gql`
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      comment {
        content
      }
      errors {
        attribute
        message
      }
    }
  }`;