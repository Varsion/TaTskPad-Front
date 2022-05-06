import { gql } from '@apollo/client'

export const START_SPRINT = gql`
  mutation StartSprint($input: StartSprintInput!) {
    startSprint(input: $input) {
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
