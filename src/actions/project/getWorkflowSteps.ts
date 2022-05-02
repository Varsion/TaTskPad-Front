import { gql } from '@apollo/client'

export const GET_WORKFLOW_STEPS = gql`
  query ($projectId: ID!) {
    project(projectId: $projectId) {
      workflowSteps {
        name
        description
      }
    }
  }
`;
