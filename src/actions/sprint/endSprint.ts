import { gql } from '@apollo/client'

export const END_SPRINT = gql`
  mutation EndSprint($input: EndSprintInput!) {
    endSprint(input: $input) {
      sprint {
        name
        isCurrent
      }
      errors {
        attribute
        message
      }
    }
  }`;
