import { gql } from '@apollo/client'

export const GET_PROJECT = gql`
query GetProjects($organizationId: ID!) {
  organization(organizationId: $organizationId) {
    owner {
      avatar
      name
    }
    projects {
      id
      name
      keyWord
      logoUrl
    }
  }
}`;
